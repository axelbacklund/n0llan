import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { colors, spacings } from '../../styles/constants'
import ArticlePreview from './ArticlePreview'

const NewsWrapper = styled.div`
  margin: ${spacings.vertical} 0;

  h1 {
    color: ${colors.porter};
    margin-bottom: 2rem;
  }
`

const News: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.AllNewsQuery>(
    graphql`
      query AllNews {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fields: { collection: { eq: "news" } } }
          limit: 10
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                description
                date(formatString: "DD MMMM YYYY", locale: "sv")
              }
            }
          }
        }
      }
    `,
  )

  const newsArticles = data.allMarkdownRemark.edges

  return (
    <NewsWrapper>
      <h1>Senaste nytt</h1>
      {newsArticles.map((item) => (
        <ArticlePreview
          key={item.node.frontmatter?.slug}
          title={item.node.frontmatter?.title ?? ''}
          slug={item.node.frontmatter?.slug ?? ''}
          description={item.node.frontmatter?.description ?? ''}
          date={item.node.frontmatter?.date ?? ''}
        />
      ))}
    </NewsWrapper>
  )
}

export default News
