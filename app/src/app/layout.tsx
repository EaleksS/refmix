import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "@/globalStyles/globals.css";
import "@/globalStyles/normalize.css";
import { Footer, Header } from "@/widgets";
import styles from "./page.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fira = Fira_Code({
	subsets: ["greek"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Refmix",
	description:
		"Кращий сервіс з обслуговування Київ комп'ютерів з безкоштовним виїздом додому",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={fira.className}>
				<section className={styles.main}>
					<Header />
				</section>
				{children}
				<Footer />
				<ToastContainer
					position="top-left"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</body>
		</html>
	);
}
