require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: "House of Black Tides",
		description: "Welcome to the house of Black Tides",
	},
	plugins: [
		"gatsby-transformer-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST
			},
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: process.env.MAILCHIMP_ENDPOINT,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `House of Black Tides`,
				short_name: `HoBT`,
				start_url: `/`,
				background_color: `#F0E8C0`,
				theme_color: `#684008`,
				display: `standalone`,
				icon: `static/favicon.ico`,
				icon_options: {
					purpose: `any maskable`,
				},
				cache_busting_mode: 'none',
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				workboxConfig: {
					globPatterns: ['**/icon-path*']
				}
			},
		},
	],
};
