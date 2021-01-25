import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Margin from '../components/Margin'
import PhotoShowcase from '../components/PhotoShowcase'
import SEO from '../components/seo'
import MaxWidth from '../components/MaxWidth'

interface NewsProps {
  data: GatsbyTypes.NewsQuery
}

const Journal: React.FC<NewsProps> = ({ data: { markdownRemark } }) => (
  <Layout>
    <SEO title={markdownRemark?.frontmatter?.title ?? 'n0llan'} />
    <Margin>
      <MaxWidth>
        <h1>{markdownRemark?.frontmatter?.title}</h1>
        <h3>{markdownRemark?.frontmatter?.date}</h3>
        {markdownRemark && markdownRemark.html && (
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        )}
      </MaxWidth>
    </Margin>
    <PhotoShowcase />
  </Layout>
)

export const query = graphql`
  query News($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "sv")
        slug
        title
      }
    }
  }
`

export default Journal
