import React from 'react'
import styled from 'styled-components'
import { colors, spacings } from '../styles/constants'

const FooterWrapper = styled.div`
  background-color: ${colors.darkBlue};
  color: white;
  width: 100%;
  padding: calc(${spacings.vertical} + 1rem) ${spacings.horizontal};

  h3 {
    color: white;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    padding: 0;
    opacity: 0.6;
  }
`

const Footer: React.FC = () => (
  <FooterWrapper>
    <h3>Mottagningen</h3>
    <h3>Industriell ekonomi KTH</h3>
    <p>&copy; 2021, Sektionen för Industriell Ekonomi KTH</p>
  </FooterWrapper>
)

export default Footer
