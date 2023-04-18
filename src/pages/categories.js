import React, { useEffect } from 'react'

import * as styles from '../components/categories.module.css'

import Layout from '../components/layout';

class Categories extends React.Component {
	componentDidMount() {
		const slickSettings = {
			dots: true,
			lazyLoad: 'progressive',
			autoplay: true,
			autoplaySpeed: 4000,
			swipeToSlide: true,
			touchThreshold: 40,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: true,
			responsive: [
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						centerMode: false,
					},
				},
			],
		};
		const slide = document.querySelector('.slide');
		if (slide) {
			$(slide).slick(slickSettings);
		}
	}

	render() {
		return (
			<Layout>
				<div class={[styles.container, styles.py5].join(' ')} >
					<div class={[styles.row, styles.mb3].join(' ')}>
						<div class={[styles.col, styles.textCenter].join(' ')}>
							<h1>Insights and new headers around every corner!</h1>
							<p>To understand the disruptive technologies permeating the financial space, Bizmark Pig Rider has written dozens of insightful fintech reports, including:</p>
						</div>
					</div>
					<ul class={styles.slide}>
						<li><img class={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685823/HoBT/IMG_2503_lhealu.jpg" alt="Personal"/></li>
						<li><img class={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685824/HoBT/IMG_9607_twm49o.jpg" alt="Travel"/></li>
						<li><img class={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685832/HoBT/IMG_8178_i0ubfk.jpg" alt="Fiction"/></li>
						<li><img class={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685827/HoBT/IMG_2662_ievl3n.jpg" alt="Philosophy"/></li>
						<li><img class={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685830/HoBT/IMG_0516_ucqa1y.jpg" alt="History"/></li>
					</ul>
				</div>
			</Layout>
		)
	}
}

export default Categories