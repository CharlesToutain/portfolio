import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import {List,  Card, Divider} from "antd"
import SEO from "../components/seo"
import Bio from "../components/bio"

const blogPage = ({ data }) => {
    const posts = data.allWordpressPost.edges
    return (
        <Layout page="2">
            <SEO title="Home" />
            <List
                grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
                }}
                dataSource={posts}
                renderItem={post => (
                <List.Item>
                    <Link to={`/${post.node.slug}/`}>
                    <Card key={post.node.id}title={post.node.title}>
                        <div dangerouslySetInnerHTML = {{__html: post.node.excerpt}}/>
                    </Card>
                    </Link>
                </List.Item>
                )}
            />
            <Divider/>
            <Bio/>
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
            excerpt
            }
        }
    }
}
`