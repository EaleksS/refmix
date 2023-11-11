"use client";

import { FC, useState } from "react";
import styles from "./Services.module.scss";
import { Service } from "@/entities";
import { Button, Modal } from "@/shared";
import Input from "react-phone-number-input/input";
import { toast } from "react-toastify";
import { myAction } from "../Form/actions";

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
	const [valuePhone, setValuePhone] = useState<string | undefined>("");
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
			<Modal
				isOpen={isOpen}
				classNameContent={styles.content}
				onClose={setIsOpen}
			>
				<form action={myAction} className={styles.form}>
					<h2>
						Залишьн контактні данні і ми зв{"'"}яжемося з вами в найближчий час
					</h2>

					<label>
						<p>Як до Вас звертатися?</p>
						<input
							type="text"
							placeholder="Впишіть ім'я"
							name="name"
							required
						/>
					</label>
					<label>
						<p>Ваш телефон</p>
						<Input
							defaultCountry="UA"
							value={valuePhone}
							placeholder="Впишіть ваш телефон"
							onChange={setValuePhone}
							name="email"
						/>
					</label>
					<Button
						disabled={!valuePhone}
						onClick={() => {
							valuePhone && toast.success("заявку прийнято, очікуйте дзвінка");
						}}
						className={styles.btn}
					>
						Відправити
					</Button>
				</form>
			</Modal>
		</>
	);
};
