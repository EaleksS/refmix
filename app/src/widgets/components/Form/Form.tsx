"use client";

import { FC, useState } from "react";
import styles from "./Form.module.scss";
import { Button } from "@/shared";
import Input from "react-phone-number-input/input";
import { myAction } from "./actions";

export const Form: FC = () => {
	const [valuePhone, setValuePhone] = useState<string | undefined>("");

	return (
		<section className={styles.section}>
			<h1>Залишились питання?</h1>

			<form action={myAction} className={styles.form}>
				<h2>Залишіть заявку!</h2>

				<label>
					<p>Як до Вас звертатися?</p>
					<input type="text" placeholder="Впишіть ім'я" name="name" required />
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
				<Button disabled={!valuePhone}>Відправити</Button>
			</form>
		</section>
	);
};
