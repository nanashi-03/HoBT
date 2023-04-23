import React, { useState } from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import * as styles from './navigation.module.css'

function Navigation() {
	const [click, setClick] = useState(false);
	function handleClick() {
		setClick(!click);
		console.log(`Clicked ${click}`)
	}
	const closeMenu = () => setClick(false);

	const handleKeyDown = event => {
		console.log(`${event.key} pressed`);
		if(event.keyCode === 13) handleClick();
	}

	return (
		<nav role="navigation" className={`${styles.navigator}`} aria-label="Main">
			<Link to="/" className={styles.logoLink}>
				<span className={styles.logo} />
				<span className={styles.navigationItem}>House of Black Tides</span>
			</Link>
			<div className={styles.navIcon} role='button' onClick={handleClick} tabIndex={0} onKeyDown={handleKeyDown} >
				<FontAwesomeIcon icon={click ? faTimes : faBars} />
			</div>
			<ul className={click ? [styles.navigation, styles.vision].join(' ') : styles.navigation}>
				<li className={styles.navigationItem}>
					<Link to="/contact" className="active" onClick={closeMenu}>
						Contact
					</Link>
				</li>
				<li className={styles.navigationItem}>
					<Link to="/blog/" className="active" onClick={closeMenu}>
						Blog
					</Link>
				</li>
				<li className={styles.navigationItem}>
					<Link to="/categories" className="active" onClick={closeMenu}>
						Categories
					</Link>
				</li>
				<li className={[styles.navigationItem, styles.signUp].join(' ')}>
					<Link to="/sub" className="active" onClick={closeMenu}>
						Subscribe
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
