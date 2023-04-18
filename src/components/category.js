import React from 'react'

import * as styles from './categories.module.css'

const Category = () => {
	<div>
		{/* flip-card-container */}
		<div className={styles.flipCardContainer}>
			<div className={styles.flipCard}>
				<div className={styles.cardFront}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
						<figcaption>Brohm Lake</figcaption>
					</figure>
					<ul className={styles.YouEl}>
						<li className={styles.ElEye}>Detail 1</li>
						<li className={styles.ElEye}>Detail 2</li>
						<li className={styles.ElEye}>Detail 3</li>
						<li className={styles.ElEye}>Detail 4</li>
						<li className={styles.ElEye}>Detail 5</li>
					</ul>
				</div>
				<div className={styles.cardBack}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
					</figure>
					<button>Book</button>
					<div className={styles.designContainer}>
						<span className={[styles.design, styles.design1]} />
						<span className={[styles.design, styles.design2]} />
						<span className={[styles.design, styles.design3]} />
						<span className={[styles.design, styles.design4]} />
						<span className={[styles.design, styles.design5]} />
						<span className={[styles.design, styles.design6]} />
						<span className={[styles.design, styles.design7]} />
						<span className={[styles.design, styles.design8]} />
					</div>
				</div>
			</div>
		</div>
		{/* /flip-card-container */}
		{/* flip-card-container */}
		<div className={styles.flipCardContainer}>
			<div className={styles.flipCard}>
				<div className={styles.cardFront}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1545436864-cd9bdd1ddebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Woodland" />
						<figcaption>Légende</figcaption>
					</figure>
					<ul className={styles.YouEl}>
						<li className={styles.ElEye}>Detail 1</li>
						<li className={styles.ElEye}>Detail 2</li>
						<li className={styles.ElEye}>Detail 3</li>
						<li className={styles.ElEye}>Detail 4</li>
						<li className={styles.ElEye}>Detail 5</li>
					</ul>
				</div>
				<div className={styles.cardBack}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1545436864-cd9bdd1ddebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Legende" />
					</figure>
					<button>Book</button>
					<div className={styles.designContainer}>
						<span className={[styles.design, styles.design1]} />
						<span className={[styles.design, styles.design2]} />
						<span className={[styles.design, styles.design3]} />
						<span className={[styles.design, styles.design4]} />
						<span className={[styles.design, styles.design5]} />
						<span className={[styles.design, styles.design6]} />
						<span className={[styles.design, styles.design7]} />
						<span className={[styles.design, styles.design8]} />
					</div>
				</div>
			</div>
		</div>
		{/* /flip-card-container */}
		{/* flip-card-container */}
		<div className={styles.flipCardContainer}>
			<div className={styles.flipCard}>
				<div className={styles.cardFront}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
						<figcaption>Brohm Lake</figcaption>
					</figure>
					<ul className={styles.YouEl}>
						<li className={styles.ElEye}>Detail 1</li>
						<li className={styles.ElEye}>Detail 2</li>
						<li className={styles.ElEye}>Detail 3</li>
						<li className={styles.ElEye}>Detail 4</li>
						<li className={styles.ElEye}>Detail 5</li>
					</ul>
				</div>
				<div className={styles.cardBack}>
					{/* only if the image is necessary */}
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
					</figure>
					<button>Book</button>
					{/* can add svg here and remove these eight spans */}
					<div className={styles.designContainer}>
						<span className={[styles.design, styles.design1]} />
						<span className={[styles.design, styles.design2]} />
						<span className={[styles.design, styles.design3]} />
						<span className={[styles.design, styles.design4]} />
						<span className={[styles.design, styles.design5]} />
						<span className={[styles.design, styles.design6]} />
						<span className={[styles.design, styles.design7]} />
						<span className={[styles.design, styles.design8]} />
					</div>
				</div>
			</div>
		</div>
		{/* /flip-card-container */}
		{/* flip-card-container */}
		<div className={styles.flipCardContainer}>
			<div className={styles.flipCard}>
				<div className={styles.cardFront}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
						<figcaption>Brohm Lake</figcaption>
					</figure>
					<ul className={styles.YouEl}>
						<li className={styles.ElEye}>Detail 1</li>
						<li className={styles.ElEye}>Detail 2</li>
						<li className={styles.ElEye}>Detail 3</li>
						<li className={styles.ElEye}>Detail 4</li>
						<li className={styles.ElEye}>Detail 5</li>
					</ul>
				</div>
				<div className={styles.cardBack}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
					</figure>
					<button>Book</button>
					<div className={styles.designContainer}>
						<span className={[styles.design, styles.design1]} />
						<span className={[styles.design, styles.design2]} />
						<span className={[styles.design, styles.design3]} />
						<span className={[styles.design, styles.design4]} />
						<span className={[styles.design, styles.design5]} />
						<span className={[styles.design, styles.design6]} />
						<span className={[styles.design, styles.design7]} />
						<span className={[styles.design, styles.design8]} />
					</div>
				</div>
			</div>
		</div>
		{/* /flip-card-container */}
		{/* flip-card-container */}
		<div className={styles.flipCardContainer}>
			<div className={styles.flipCard}>
				<div className={styles.cardFront}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
						<figcaption>Brohm Lake</figcaption>
					</figure>
					<ul className={styles.YouEl}>
						<li className={styles.ElEye}>Detail 1</li>
						<li className={styles.ElEye}>Detail 2</li>
						<li className={styles.ElEye}>Detail 3</li>
						<li className={styles.ElEye}>Detail 4</li>
						<li className={styles.ElEye}>Detail 5</li>
					</ul>
				</div>
				<div className={styles.cardBack}>
					<figure>
						<div className={styles.imgBg} />
						<img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" />
					</figure>
					<button>Book</button>
					<div className={styles.designContainer}>
						<span className={[styles.design, styles.design1]} />
						<span className={[styles.design, styles.design2]} />
						<span className={[styles.design, styles.design3]} />
						<span className={[styles.design, styles.design4]} />
						<span className={[styles.design, styles.design5]} />
						<span className={[styles.design, styles.design6]} />
						<span className={[styles.design, styles.design7]} />
						<span className={[styles.design, styles.design8]} />
					</div>
				</div>
			</div>
		</div>
		{/* /flip-card-container */}
	</div>
} 

export default Category