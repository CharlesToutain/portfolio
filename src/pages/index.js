import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges
  console.log(posts)
  return (
    <Layout page="1"> 
      <SEO title="Home" />
      <h1>Développeur Full-Stack ERP/CRM/Odoo</h1>
      <Link to="/blog/">Voir le blog</Link>
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
