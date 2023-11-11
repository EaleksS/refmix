import { Button, Modal } from "@/shared";
import { FC, useState, Dispatch, SetStateAction } from "react";
import Input from "react-phone-number-input/input";
import { toast } from "react-toastify";
import { myAction } from "@/widgets/components/Form/actions";
import styles from "./FormModal.module.scss";

interface Props {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	title?: string;
}

export const FormModal: FC<Props> = ({
	isOpen,
	setIsOpen,
	title = `Залишьн контактні данні і ми зв ${"'"}яжемося з вами в найближчий час`,
}) => {
	const [valuePhone, setValuePhone] = useState<string | undefined>("");

	return (
		<Modal
			isOpen={isOpen}
			classNameContent={styles.content}
			onClose={setIsOpen}
		>
			<form action={myAction} className={styles.form}>
				<h2>{title}</h2>

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
	);
};
