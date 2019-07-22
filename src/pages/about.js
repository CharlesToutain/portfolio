import React from 'react';

import Layout from "../components/layout"
import Bio from "../components/bio"
import Skills from "../components/skills"
import SEO from "../components/seo"

const About = () => {
    return (
        <Layout page="4">
            < SEO title = "A propos de Charles-Eddouard Toutain" /> 
            <h1>A propos</h1>
            <Skills/>
            <Bio/>
        </Layout>
    );
}

export default About;
