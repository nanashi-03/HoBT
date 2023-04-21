import React from 'react'
import Slider from 'react-slick';

import * as styles from '../components/categories.module.css'

import Layout from '../components/layout';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

class Categories extends React.Component {
	render() {
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
		return (
			<Layout>
				<Helmet>
					<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				</Helmet>
				<div className={[styles.container, styles.py5].join(' ')} >
					<div className={[styles.row, styles.mb3].join(' ')}>
						<div className={[styles.col, styles.textCenter].join(' ')}>
							<h1>Categories</h1>
						</div>
					</div>
					<Slider className='slider' {...slickSettings}>
						<div>
							<Link to='/blog/?cat=personal'>
								<img className={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685823/HoBT/IMG_2503_lhealu.jpg" alt="Personal" />
							</Link>
						</div>
						<div>
							<Link to='/blog/?cat=travel'>
								<img className={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685824/HoBT/IMG_9607_twm49o.jpg" alt="Travel" />
							</Link>
						</div>
						<div>
							<Link to='/blog/?cat=fiction'>
								<img className={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685832/HoBT/IMG_8178_i0ubfk.jpg" alt="Fiction" />
							</Link>
						</div>
						<div>
							<Link to='/blog/?cat=philosophy'>
								<img className={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685827/HoBT/IMG_2662_ievl3n.jpg" alt="Philosophy" />
							</Link>
						</div>
						<div>
							<Link to='/blog/?cat=history'>
								<img className={styles.imgFluid} src="https://res.cloudinary.com/df14bgl0t/image/upload/v1675685830/HoBT/IMG_0516_ucqa1y.jpg" alt="History" />
							</Link>
						</div>
					</Slider>
				</div>
			</Layout>
		)
	}
}