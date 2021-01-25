import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/constants'

interface LargeLinkProps {
  title: string
  link: string
}

const MainWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
  }
`

const ActualClickArea = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${colors.gray};
  text-align: center;

  h4 {
    padding: 0;
    margin: 0;
  }
`

const LargeLink: React.FC<LargeLinkProps> = ({ title, link }) => (
  <MainWrapper>
    <a href={link} rel="noreferrer" target="_blank">
      <ActualClickArea>
        <h4>{title}</h4>
      </ActualClickArea>
    </a>
  </MainWrapper>
)

export default LargeLink
