import React from 'react'
import { graphql } from 'gatsby';

const Page = ({ data }) => {
    const { title, content} = data.wordpressPage
    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}

export default Page

export const pageQuery = graphql 
`
query pageQuery($id: String!) {
    wordpressPage(id: {eq: $id}){
        title
        content
    }
}
`