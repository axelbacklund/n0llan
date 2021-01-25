import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import SEO from '../components/seo'
import ImageTitle from '../components/ImageTitle'
import LargeLink from '../components/LargeLink'

interface OsaProps {
  data: GatsbyTypes.OSAQuery
}

const OsaPage: React.FC<OsaProps> = ({
  data: { titleBackground, osaItems, pageContent },
}) => (
  <Layout>
    <SEO title="OSA" />
    {titleBackground && titleBackground.childImageSharp && (
      <ImageTitle title="OSA" image={titleBackground.childImageSharp.fluid} />
    )}
    <Margin>
      <MaxWidth>
        <h3>{pageContent?.frontmatter?.title}</h3>
        {pageContent && pageContent.html && (
          <div dangerouslySetInnerHTML={{ __html: pageContent.html }} />
        )}
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
  query OSA {
    titleBackground: file(
      relativePath: { eq: "photos/46386727345_1579658c1b_k.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pageContent: markdownRemark(frontmatter: { slug: { eq: "/osa" } }) {
      html
      frontmatter {
        title
      }
    }
    osaItems: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "osa" } } }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            date(formatString: "DD MMMM YYYY", locale: "sv")
          }
        }
      }
    }
  }
`

export default OsaPage
