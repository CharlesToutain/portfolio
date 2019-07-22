import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { Row, Col, Card} from "antd"
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
                        <div style={{ background: '#ECECEC', padding: '30px' }}>
                            <Row gutter={16}>
                            <Col span={8}>
                                <Card key={post.node.id} title={post.node.title} bordered={false}>
                                    <div dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                                </Card>
                            </Col>
                            </Row>
                        </div>
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
            excerpt
            }
        }
    }
}
`