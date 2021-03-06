const path = require ('path')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators })  => {
    const { createPage } = boundActionCreators

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allWordpressPost {
                    edges {
                        node {
                        id
                        slug
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors){
                console.log(result.errors)
                reject.result.errors
            }
            const postTemplate = path.resolve('./src/templates/post.js')
            result.data.allWordpressPost.edges.map( post => {
                createPage({
                    path: `/${post.node.slug}/`,
                    component: slash(postTemplate),
                    context : {
                        slug: post.node.slug,
                        id: post.node.id
                    }
                })
            })
            resolve()
        })
        graphql(`
            {
                allWordpressPage {
                    edges {
                        node {
                        id
                        slug
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors){
                console.log(result.errors)
                reject.result.errors
            }
            const pageTemplate = path.resolve('./src/templates/page.js')
            result.data.allWordpressPage.edges.map( page => {
                createPage({
                    path: `/${page.node.slug}/`,
                    component: slash(pageTemplate),
                    context : {
                        slug: page.node.slug,
                        id: page.node.id
                    }
                })
            })
            resolve()
        })
    })
}