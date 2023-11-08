"use server";

import axios from "axios";

const sendTg = async (name: string, phone: string) => {
	const TOKEN = "6227172461:AAH38PUCFGP3LQtTxOAgZPY18IrrrYktmbU";
	const CHAT_ID = "-1001844484727";
	const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

	const message = `<b>Ukrop</b> - Заявка с сайта!\n<b>Имя: </b>${name}\n<b>Номер: </b>${phone}\n<b>Время отправки: </b>${new Date().toLocaleDateString()}`;

	await axios
		.post(URL_API, {
			chat_id: CHAT_ID,
			parse_mode: "HTML",
			text: message,
		})
		.then(() => {
			console.log("заявка успешно отправлено");
			alert("Спасибо. Заявка принята.");
		})
		.catch((e: any) => {
			console.error(e, "ошибка отправки сообщения в тг");
		});
};

export async function myAction(y: FormData) {
	const name = String(y.get("name"));
	const email = String(y.get("email"));

	console.log(name, email);

	await sendTg(name, email);
}
