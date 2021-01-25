import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { colors, spacings } from '../../styles/constants'

const ArticleWrapper = styled.div`
  padding: ${spacings.horizontal};
  background-color: ${colors.gray};
  width: 100%;

  h3 {
    margin: 0.5rem 0 0.8rem 0;
  }

  p {
    padding: 0;
    margin: 0;
    color: ${colors.darkBlue};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  a {
    text-decoration: none;
  }
`

const MainWrapper = styled.div`
  max-width: 65rem;
  margin-bottom: 1rem;
`

interface ArticlePreviewProps {
  title: string
  slug: string
  description: string
  date: string
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  title,
  slug,
  description,
  date,
}) => (
  <MainWrapper>
    <StyledLink to={slug}>
      <ArticleWrapper>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
      </ArticleWrapper>
    </StyledLink>
  </MainWrapper>
)

export default ArticlePreview
