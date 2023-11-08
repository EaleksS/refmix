import { FC } from "react";
import styles from "./About.module.scss";
import { Button } from "@/shared";
import Image from "next/image";

export const About: FC = () => {
	return (
		<section className={styles.about}>
			<h1>
				Про нас в цифрах
				<Image src="/images/stone.png" alt="stone" width={128} height={128} />
			</h1>
			<ul>
				<li>50.000 + задоволених клієнтів</li>
				<li>5 + років на ринку</li>
				<li>10 + кращих спеціалістів</li>
			</ul>
		</section>
	);
};
