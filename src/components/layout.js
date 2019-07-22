/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import {Layout, Menu, Icon } from "antd" 

const { Header, Content, Footer, Sider, } = Layout

const GLayout = ({ children, page}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <Layout style={{minHeight:"100vh"}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="user" />
            <span className="nav-text">Accueil</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/blog/">
            <Icon type="video-camera" />
            <span className="nav-text">Blog</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
          <Menu.Item key="4">
            <Link to="/about/">
              <Icon type="user" />
              <span className="nav-text">About</span>
            </Link>
          </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header>
        <h1 style={{color: "white "}}>
            {data.site.siteMetadata.title}
        </h1>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Charles-Edouard Toutain ©2018 Created</Footer>
    </Layout>
  </Layout>
  )
}

GLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GLayout
