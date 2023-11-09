"use client";

import { FC } from "react";
import styles from "./Guarantee.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Guarantee: FC = () => {
	const router = useRouter();

	return (
		<section className={styles.section}>
			<div className={styles.left} onClick={() => router.push("/#form")}>
				<Image
					src="/images/g-left.png"
					alt="left"
					width={640}
					height={315}
					priority
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
			<div className={styles.right} onClick={() => router.push("/#form")}>
				<Image
					src="/images/g-right.png"
					alt="left"
					width={640}
					height={315}
					priority
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
	);
};
