import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
	<nav role="navigation" className={`${styles.navigator}`} aria-label="Main">
		<Link to="/" className={styles.logoLink}>
			<span className={styles.logo} />
			<span className={styles.navigationItem}>House of Black Tides</span>
		</Link>
		<ul className={styles.navigation}>
			<li className={styles.navigationItem}>
				<Link to="#" className="active">
					Contact
				</Link>
			</li>
			<li className={styles.navigationItem}>
				<Link to="/blog/" className="active">
					Blog
				</Link>
			</li>
			<li className={styles.navigationItem}>
				<Link to="/categories" className="active">
					Categories
				</Link>
			</li>
		</ul>
	</nav>
)

export default Navigation
