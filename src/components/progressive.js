import React, {useState, useEffect} from 'react';

import * as styles from './categories.module.css';

const ProgressiveImg = ({phsrc, src, ...props}) => {
	const [imgSrc, setImgSrc] = useState(phsrc || src);
	const customClass = phsrc && imgSrc === phsrc ? styles.loading : styles.loaded;
	useEffect(() => {
		const img = new Image();
		img.src = src;
		img.onload = () => {
		  setImgSrc(src);
		};
	  }, [src]);
	
	return (
		<img
			{...{ src: imgSrc, ...props }}
			alt={props.alt || ""}
			className={[styles.imgFluid, customClass].join(' ')}
		/>
	);
};

export default ProgressiveImg;