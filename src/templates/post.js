import React from 'react'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Divider} from "antd"
import { graphql } from 'gatsby';

const Post = ({ data }) => {
    const { title, content, date} = data.wordpressPost
    return (
        <Layout>
            <SEO title={title} description={title} />
            <p>{date}</p>
            <div className="container" dangerouslySetInnerHTML={{ __html: content }} />
            <Bio />
            <Divider />
        </Layout>
    )
}

export default Post

export const postQuery = graphql 
`
query postQuery($id: String!){
    wordpressPost(id: {eq: $id}){
        title
        content
        date(formatString: "DD/MM/YYYY")
    }
}
`
