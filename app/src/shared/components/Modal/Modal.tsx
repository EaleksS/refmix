"use client";

import clsx from "clsx";
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	useEffect,
	useRef,
} from "react";
import styles from "./Modal.module.scss";
import Image from "next/image";
import { createPortal } from "react-dom";

interface Props {
	children: ReactNode;
	className?: string;
	classNameContent?: string;
	isOpen?: boolean;
	onClose?: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({
	children,
	className,
	classNameContent,
	onClose,
	isOpen = false,
}) => {
	const el = document.createElement("div");
	const wrapper: React.RefObject<HTMLElement> = useRef(el);

	useEffect(() => {
		const current = wrapper.current as HTMLElement;
		current.setAttribute("id", "overlay");
		document.body.appendChild(current);

		return () => {
			document.body.removeChild(current);
		};
	}, []);

	if (!wrapper.current) {
		return <>{null}</>;
	}

	const handleClose = () => {
		onClose && onClose((prev) => !prev);
	};

	if (!isOpen) {
		return null;
	}

	const modal = (
		<div className={clsx(styles.overlay, className)} onClick={handleClose}>
			<div
				className={clsx(styles.content, classNameContent)}
				onClick={(e) => e.stopPropagation()}
			>
				<Image
					src="/images/close.png"
					alt="close"
					width={25}
					height={25}
					className={styles.close}
					onClick={() => onClose && onClose((prev) => !prev)}
				/>
				{children}
			</div>
		</div>
	);

	return createPortal(modal, wrapper.current);
};
