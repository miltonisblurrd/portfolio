import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        
        <Header />
          {children}
          <footer className="foota">
            © BLURRD Studio {new Date().getFullYear()}, Built with 
            <img src={require('../images/heart.png')} width="20" />
             using
            <a href="https://www.gatsbyjs.org"> Gatsby</a>
          </footer>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
