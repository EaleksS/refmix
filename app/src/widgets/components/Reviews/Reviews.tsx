"use client";

import { FC } from "react";
import styles from "./Reviews.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export const Reviews: FC = () => {
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return (
				'<span style="width: 20px; height: 20px" class="' +
				className +
				'">' +
				(index + 1) +
				"</span>"
			);
		},
	};

	const { width } = useWindowDimensions();

	return (
		<section className={styles.section} id="відгуки">
			<h1>Відгуки</h1>

			<Swiper
				pagination={pagination}
				modules={[Pagination]}
				slidesPerView={width > 1000 ? 2 : 1}
				spaceBetween={20}
				className="mySwiper"
			>
				{[0, 1, 3, 4, 5].map((e) => (
					<SwiperSlide key={e}>
						<article className={styles.article}>
							<h2>Виїхали, зробили, ціна приємних питань немає!</h2>
							<div className={styles.rates}>
								{[0, 1, 2, 3, 4].map((e) => (
									<Image
										key={e}
										src="/images/Star 1.svg"
										alt="star"
										width={40}
										height={40}
									/>
								))}
								<h2>Дмитро</h2>
							</div>
						</article>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
