import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import SEO from '../components/seo'
import ImageTitle from '../components/ImageTitle'
import LargeLink from '../components/LargeLink'

interface MediaProps {
  data: GatsbyTypes.MediaQuery
}

const MediaPage: React.FC<MediaProps> = ({
  data: { titleBackground, mediaItems, pageContent },
}) => (
  <Layout>
    <SEO title="Media" />
    {titleBackground && titleBackground.childImageSharp && (
      <ImageTitle title="Media" image={titleBackground.childImageSharp.fluid} />
    )}
    <Margin>
      <MaxWidth>
        <h3>{pageContent?.frontmatter?.title}</h3>
        {pageContent && pageContent.html && (
          <div dangerouslySetInnerHTML={{ __html: pageContent.html }} />
        )}
        <br />
        {mediaItems.edges.map((item) => (
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
  query Media {
    titleBackground: file(
      relativePath: { eq: "photos/50229547302_a14bbef9a2_k.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pageContent: markdownRemark(frontmatter: { slug: { eq: "/media" } }) {
      html
      frontmatter {
        title
      }
    }
    mediaItems: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "media" } } }
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

export default MediaPage
