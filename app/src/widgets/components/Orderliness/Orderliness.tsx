import { FC } from "react";
import styles from "./Orderliness.module.scss";
import Image from "next/image";

const data = [
	{ title: "Заявка", img: "/images/Group 57.png" },
	{ title: "Консультація фахівця", img: "/images/Group 58.png" },
	{ title: "Виїзд майстра", img: "/images/Group 56.png" },
	{ title: "Виконання робіт", img: "/images/Group 55.png" },
];

export const Orderliness: FC = () => {
	return (
		<section className={styles.section} id="orderline">
			<h1>Як ми працюємо?</h1>
			<div className={styles.items}>
				{data.map((e, i) => (
					<article key={i}>
						<Image
							src={e.img ? e.img : ""}
							alt="order"
							width={377}
							height={435}
						/>
						<h2>{i + 1}</h2>
						<h3>{e.title}</h3>
					</article>
				))}
			</div>
		</section>
	);
};
