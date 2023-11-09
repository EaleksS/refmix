import { FC } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="#orderline">Наші послуги</Link>
				</li>
				<li>
					<Link href="#services">Як ми працюємо</Link>
				</li>
				<li>
					<Link href="#відгуки">Відгуки</Link>
				</li>
			</ul>
		</nav>
	);
};
