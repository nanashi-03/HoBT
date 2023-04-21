import React from 'react';
import { Link } from 'gatsby';

import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
	tags?.length > 0 && (
		<small className={styles.tags}>
			{tags.map((tag) => (
				<div key={tag} className={styles.tag}>
					<Link to={`/blog/?cat=${tag}`}>
						{tag}
					</Link>
				</div>
			))}
		</small>
	)

export default Tags
