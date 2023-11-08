import Image from "next/image";
import styles from "./page.module.scss";
import { About, Form, Guarantee, Orderliness, Services } from "@/widgets";

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				<section className={styles.section}>
					<h1>
						{/* <Image src="/images/kiew.svg" alt="2" width={291} height={108} /> */}
						<b>Кращий сервіс</b> з обслуговування <span>Київ</span> <br />
						комп'ютерів з безкоштовним виїздом додому
					</h1>
				</section>
				<Guarantee />
				<About />
				<Services />
				<Orderliness />
				<Form />
				{/* <Advantage /> */}
			</main>
		</>
	);
}
