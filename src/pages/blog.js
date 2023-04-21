import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
	render() {
		const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
		const { location } = this.props
		const params = new URLSearchParams(location.search)
		const category = params.get('cat')
		const categories = ["personal", "fiction", "history", "travel", "philosophy"];
		console.log(categories.includes(category));
		
		const filteredPosts = categories.includes(category)?posts.filter(post => post.tags.includes(category)):posts
		const heroTitle = categories.includes(category)?category:"Blogs";

		return (
			<Layout location={this.props.location}>
				<Seo title="Blog" />
				<Hero title={heroTitle} />
				<ArticlePreview posts={filteredPosts} />
			</Layout>
		)
	}
}

export default BlogIndex

export const pageQuery = graphql`
  	query BlogIndexQuery{
    	allContentfulBlogPost(
      		sort: { publishDate: DESC }
   			) {
      			nodes {
        		title
        		slug
        		publishDate(formatString: "MMMM Do, YYYY")
        		tags
				heroImage {
					gatsbyImage(
						layout: FULL_WIDTH
						placeholder: BLURRED
						width: 424
						height: 212
					)
				}
				description {
					raw
				}
      		}
    	}
  	}
`;
