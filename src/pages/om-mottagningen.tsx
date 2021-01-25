import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import SEO from '../components/seo'
import ImageTitle from '../components/ImageTitle'
import LargeLink from '../components/LargeLink'

interface AboutProps {
  data: GatsbyTypes.AboutQuery
}

const AboutPage: React.FC<AboutProps> = ({
  data: { titleBackground, osaItems, pageContent },
}) => (
  <Layout>
    <SEO title="Om mottagningen" />
    {titleBackground && titleBackground.childImageSharp && (
      <ImageTitle
        title="Om mottagningen"
        image={titleBackground.childImageSharp.fluid}
      />
    )}
    <Margin>
      <MaxWidth>
        <h3>{pageContent?.frontmatter?.title}</h3>
        {pageContent && pageContent.html && (
          <div dangerouslySetInnerHTML={{ __html: pageContent.html }} />
        )}
        <br />
        <h2>Länkar till mer nyttig info</h2>
        <br />
        {osaItems.edges.map((item) => (
          <LargeLink
            key={item.node.frontmatter?.link}
            link={item.node.frontmatter?.link ?? ''}
            title={item.node.frontmatter?.title ?? ''}
          />
        ))}
      </MaxWidth>
    </Margin>
  </Layout>
)

export const query = graphql`
  query About {
    titleBackground: file(relativePath: { eq: "photos/kth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pageContent: markdownRemark(
      frontmatter: { slug: { eq: "/om-mottagningen" } }
    ) {
      html
      frontmatter {
        title
      }
    }
    osaItems: allMarkdownRemark(
      filter: { fields: { collection: { eq: "info-links" } } }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`

export default AboutPage
