"use client";

import { FC, useState } from "react";
import styles from "./Services.module.scss";
import { FormModal, Service } from "@/entities";

export interface IData {
	title: string;
	bg: string;
	img: string;
}

const data: IData[] = [
	{
		title: "Встановлення програмного забезпечення",
		bg: "/images/Group 46.png",
		img: "/images/image 118.png",
	},
	{
		title: "Ремонт комп'ютерів",
		bg: "/images/Group 47.png",
		img: "/images/image 119.png",
	},
	{
		title: "Зборка комп'ютер",
		bg: "/images/Group 48.png",
		img: "/images/image 120.png",
	},
	{
		title: "Чистка комп'ютера",
		bg: "/images/Group 49.png",
		img: "/images/image 121.png",
	},
	{
		title: "Лікування від вірусів",
		bg: "/images/Group 50.png",
		img: "/images/image 122.png",
	},
	{
		title: "Налаштування інтернету",
		bg: "/images/Group 51.png",
		img: "/images/image 123.png",
	},
	{
		title: "Відновлення даних",
		bg: "/images/Group 52.png",
		img: "/images/image 124.png",
	},
	{
		title: "Абонентське обслуговування організацій",
		bg: "/images/Group 53.png",
		img: "/images/Group 53.png",
	},
	{
		title: "Tv/Монітори",
		bg: "/images/Group 54.png",
		img: "/images/image 126.png",
	},
];

export const Services: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<section className={styles.section} id="services">
				<h1>Наші послуги</h1>

				<div className={styles.items} onClick={() => setIsOpen(true)}>
					{data.map((e) => (
						<Service key={e.title} {...e} />
					))}
				</div>
			</section>
			<section className={styles.section}>
				<h1 className={styles.asd}>
					Хочу викликати майстра!
					<span onClick={() => setIsOpen((prev) => !prev)}>
						Залишити заявку
					</span>
				</h1>
			</section>
			<FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
};
