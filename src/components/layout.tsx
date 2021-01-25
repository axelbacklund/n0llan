import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

import '../styles/main.css'
import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => (
  <StaticQuery<GatsbyTypes.SiteTitleQuery>
    query={graphql`
      query SiteTitle {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Header
          name={data.site?.siteMetadata?.title}
          links={data.site?.siteMetadata?.menuLinks?.map((link) => {
            return { link: link?.link, name: link?.name }
          })}
        />
        {children}
        <Footer />
      </>
    )}
  />
)

export default Layout
