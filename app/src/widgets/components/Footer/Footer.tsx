import { FC } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Footer: FC = () => {
	return (
		<section className={styles.section}>
			<Image
				src="/images/footer-bg.png"
				alt="footer"
				width={1920}
				height={200}
				className={styles.bg}
			/>
			<footer className={styles.footer}>
				<Image src="/images/logo2.png" alt="logo" width={200} height={62} />
				<nav>
					<ul>
						<li style={{ cursor: "default" }}>МЕНЮ</li>
						<li>
							<Link href="#services">Наші послуги</Link>
						</li>
						<li>
							<Link href="#orderline">Як ми працюємо</Link>
						</li>
						<li>
							<Link href="#">Відгуки</Link>
						</li>
					</ul>
				</nav>
				<ul className={styles.info}>
					<li>
						<Link href="tel:+380938319410">
							<Image
								src="/images/fluent-emoji-high-contrast_telephone.png"
								alt="tel"
								width={48}
								height={51}
							/>
							+380938319410
						</Link>
					</li>
					<li>
						<Link href="mailto:pcservicekiev142@gmail.com">
							<Image
								src="/images/material-symbols_mail-sharp.png"
								alt="email"
								width={48}
								height={39}
							/>
							pcservicekiev142@gmail.com
						</Link>
					</li>
				</ul>
			</footer>
			<Image
				src="/images/Ellipse.png"
				alt="ellips"
				width={640}
				height={636}
				className={styles.ellips}
			/>
			<div className={styles.phoneg}>
				<Image
					src="/images/photoeditorsdk-export (2).png"
					alt="ellips"
					width={700}
					height={798}
				/>
			</div>
		</section>
	);
};
