import { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { Nav } from "./Nav/Nav";
import clsx from "clsx";
import Link from "next/link";

interface Props {
	line?: boolean;
}

export const Header: FC<Props> = ({ line = false }) => {
	return (
		<header
			className={clsx({
				[styles.header]: true,
				[styles.line]: line,
			})}
		>
			<Link href="/">
				<Image src="/images/logo.png" alt="logo" height={58} width={189} />
			</Link>
			<Nav />
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href="tel:+380938319410">
							<Image
								src="/images/phone.png"
								alt="phone"
								width={40}
								height={40}
							/>
							<span>
								+380938319410 <b>Відгуки зворотній дзвінок</b>
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
