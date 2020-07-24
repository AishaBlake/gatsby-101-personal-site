module.exports = {
    siteMetadata: {
        title: `Aisha Blake`,
        author: `Aisha Blake`,
        description: `Aisha Blake's personal site for Gatsby 101 at CodeLand`,
        siteUrl: `https://gatsby-101-personal-site.netlify.app`,
        alternateSite: `https://aisha.codes`,
        social: [
            {
                name: `Twitter`,
                url: `https://twitter.com/AishaBlake`,
            },
            {
                name: `GitHub`,
                url: `https://github.com/AishaBlake`,
            },
        ],
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-theme-blog`,
            options: {
                basePath: `/blog`,
                mdxOtherwiseConfigured: true
            }
        }
    ]
}