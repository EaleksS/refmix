import styles from "./page.module.scss";
import {
	About,
	Form,
	Guarantee,
	Orderliness,
	Reviews,
	Services,
} from "@/widgets";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<h1>
						<b>Кращий сервіс</b> з обслуговування <span>Київ</span> <br />
						комп{"'"}ютерів з безкоштовним виїздом додому
					</h1>
				</section>
				<Guarantee />
				<About />
				<Services />
				<Orderliness />
				<Reviews />
				<Form />
			</main>
		</>
	);
}
