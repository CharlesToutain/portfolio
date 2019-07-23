import React from 'react';

import Layout from "../components/layout"
import Bio from "../components/bio"
import Skills from "../components/skills"
import SEO from "../components/seo"
import { Divider } from 'antd';

const About = ({ data }) => {
    const about = data.wordpressPage
    console.log(about)
    return (
        <Layout page="4">
            <SEO title = "A propos de Charles-Eddouard Toutain" /> 
            <h1>{about.title}</h1>
            <p dangerouslySetInnerHTML = {{__html: about.content}}/>
            <Skills/>
            <Divider/>
            <Bio/>
        </Layout>
    );
}

export default About;

export const AboutPage = graphql `
query AboutPage {
    wordpressPage(slug: {
        in: "about"
    }) {
        title
        content
    }
}
`
