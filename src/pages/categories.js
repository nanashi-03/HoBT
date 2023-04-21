import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout';
import * as styles from '../components/categories.module.css';
import ProgressiveImg from '../components/progressive';

const CARDS = 5;
const titles = ["Fiction", "Personal", "Travel", "History", "Philosophy"];
const images = [
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682069770/HoBT/full/IMG_8178_i0ubfk_sl5eu7.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682069769/HoBT/full/IMG_2503_lhealu_mphmio.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682069771/HoBT/full/IMG_9607_twm49o_mbe1df.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682069769/HoBT/full/IMG_0516_ucqa1y_um15q9.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682069769/HoBT/full/IMG_2662_ievl3n_f6vsy2.jpg",
];
const phImages = [
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682071594/HoBT/placeholder/IMG_8178_i0ubfk_sl5eu7_o0d470.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682071594/HoBT/placeholder/IMG_2503_lhealu_mphmio_rznrzq.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682071594/HoBT/placeholder/IMG_9607_twm49o_mbe1df_kgvdh8.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682071594/HoBT/placeholder/IMG_0516_ucqa1y_um15q9_qyqfz1.jpg",
	"https://res.cloudinary.com/df14bgl0t/image/upload/v1682071594/HoBT/placeholder/IMG_2662_ievl3n_f6vsy2_mmgt1w.jpg",
];
const colours = [
	"var(--brown)",
	"var(--white)",
	"var(--white)",
	"var(--white)",
	"var(--brown)",
];
const MAX_VISIBILITY = 3;

export default class Categories extends React.Component {
	render() {
		return (
			<Layout>
				<div className={styles.app}>
					<Carousel>
						{[...new Array(CARDS)].map((_, i) => (
							<Card title={titles[i]} image={images[i]} phImage={phImages[i]} colour={colours[i]} />
						))}
					</Carousel>
				</div>
			</Layout>
		)
	}
}

const Card = ({ title, image, phImage, colour }) => (
	<div>
		<Link  className={[styles.card, styles.stack].join(' ')} to={`/blog/?cat=${title.toLowerCase()}`} >
			<h2 style={{color: colour}}>{title}</h2>
			<ProgressiveImg phsrc={phImage} src={image} alt={title} />
		</Link>
	</div>
);

const Carousel = ({ children }) => {
	const [active, setActive] = useState(2);
	const count = React.Children.count(children);

	return (
		<div className={styles.carousel}>
			{active > 0 && <button className={[styles.nav, styles.left].join(' ')} onClick={() => setActive(i => i - 1)}>
				<FontAwesomeIcon icon={faChevronLeft}/>
			</button>}
			{React.Children.map(children, (child, i) => (
				<div className={styles.cardContainer} style={{
					'--active': i === active ? 1 : 0,
					'--offset': (active - i) / 3,
					'--direction': Math.sign(active - i),
					'--abs-offset': Math.abs(active - i) / 3,
					'pointer-events': active === i ? 'auto' : 'none',
					'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
					'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
				}}>
					{child}
				</div>
			))}
			{active < count - 1 && <button className={[styles.nav, styles.right].join(' ')} onClick={() => setActive(i => i + 1)}>
				<FontAwesomeIcon icon={faChevronRight}/>
			</button>}
		</div>
	);
};
