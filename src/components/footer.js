import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
	<Container as="footer">
		<div className={styles.container}>
			©Nanashi {new Date().getFullYear()} &middot; Built with
			{` `}
			<a href="https://www.gatsbyjs.com">Gatsby</a>{` `}
			&middot;{` `}
			Icons from <a href="https://www.vecteezy.com/free-vector/space">Space Vectors by Vecteezy</a>
		</div>
	</Container>
)

export default Footer
