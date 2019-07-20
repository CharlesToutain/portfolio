import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const blogPage = ({ data }) => {
    const posts = data.allWordpressPost.edges
    console.log(posts)
    return (
        <Layout>
            <SEO title="Home" />
            {
                posts.map(post =>(
                <Link to={`/${post.node.slug}/`}>
                <h1 key={post.node.id}>{post.node.title}</h1>
                </Link>
                ))
            }
        </Layout>
    )
}

export default blogPage

export const blogExcerpt = graphql `
query blogExcerpt {
    allWordpressPost {
        edges {
            node {
            id
            title
            slug
            date
            }
        }
    }
}
`