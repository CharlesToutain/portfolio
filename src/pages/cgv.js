import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const CgvPage = ({ data }) => {
    const posts = data.allWordpressPage.edges
    return (
        <Layout>
            {
                posts.map(post => (
                    <h1 key={post.node.id}>
                        {post.node.title}
                    </h1>
                ))
            }
        </Layout>
    )
}
export default CgvPage

export const CgvQuery = graphql `
query CgvQuery {
    allWordpressPage {
        edges {
            node {
            wordpress_id
            title
            content
            slug
            date
            }
        }
    }
}
`