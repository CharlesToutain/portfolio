import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges
  console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Charles-Edouard</h1>
      {
        posts.map(post =>(
          <Link to={`/${post.node.slug}/`}>
          <h1 key={post.node.id}>{post.node.title}</h1>
          </Link>
        ))
      }
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      < Link to = "/portfolio/" > Go to page 3 </Link>
      < Link to = "/cgv/" > Go to page 3 </Link>
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql `
  query IndexQuery  {
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