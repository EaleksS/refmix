"use client";

import { FC, useState } from "react";
import styles from "./Guarantee.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormModal } from "@/entities";

export const Guarantee: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isOpen2, setIsOpen2] = useState<boolean>(false);

	return (
		<>
			<section className={styles.section}>
				<div className={styles.left}>
					<Image
						src="/images/g-left.png"
						alt="left"
						width={640}
						height={315}
						priority
						className={styles.img_main}
						onClick={() => setIsOpen(true)}
					/>
					<Image
						src="/images/finger.png"
						alt="left"
						width={128}
						height={128}
						className={styles.finger}
						priority
					/>
					<h2>Викликати Майстра</h2>
				</div>
				<div className={styles.right}>
					<Image
						src="/images/g-right.png"
						alt="left"
						width={640}
						height={315}
						priority
						className={styles.img_main}
						onClick={() => setIsOpen2(true)}
					/>
					<Image
						src="/images/finger.png"
						alt="left"
						width={128}
						height={128}
						className={styles.finger}
						priority
					/>
					<h2>Отримати консультацію</h2>
				</div>
			</section>
			<FormModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title="Залишьн контактні данні і ми зв'яжемося з вами в найближчий час"
			/>
			<FormModal
				isOpen={isOpen2}
				setIsOpen={setIsOpen2}
				title="Залиште контактні данні і ми проконсультуємо вас в найближчий час"
			/>
		</>
	);
};
