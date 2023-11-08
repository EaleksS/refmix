import { FC } from "react";
import styles from "./Service.module.scss";
import Image from "next/image";
import { IData } from "@/widgets/components/Services/Services";

export const Service: FC<IData> = ({ title, bg, img }) => {
	return (
		<article className={styles.article}>
			<Image
				src={bg ? bg : ""}
				alt="bg"
				width={480}
				height={480}
				className={styles.bg}
			/>

			<div className={styles.title}>
				<h2>{title}</h2>
				{/* <Image src={img ? img : ""} alt="png" width={200} height={133} /> */}
			</div>
		</article>
	);
};
