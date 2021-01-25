import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { breakpointsDown, colors, spacings } from '../styles/constants'
import styled from 'styled-components'

const HeroWrapper = styled.div`
  background-color: ${colors.gray};
  padding: ${spacings.horizontal};
  padding-top: 0;

  @media ${breakpointsDown.desktop} {
    padding: ${spacings.horizontalMobile};
    padding-top: 0;
  }
`

const HeroBackground = styled(BackgroundImage)`
  height: 16rem;
  display: flex;
  flex-direction: column;
  padding: ${spacings.horizontal};

  @media ${breakpointsDown.desktop} {
    padding: ${spacings.horizontalMobile};
  }
`

const TitleText = styled.h1`
  color: white;
  text-shadow: 0 2px 20px black;
`

interface ImageTitleProps {
  image?: GatsbyTypes.GatsbyImageSharpFluidFragment
  title: string
}

const ImageTitle: React.FC<ImageTitleProps> = ({ image, title }) => (
  <HeroWrapper>
    {image && (
      <HeroBackground fluid={image} backgroundColor={`#040e18`}>
        <TitleText>{title}</TitleText>
      </HeroBackground>
    )}
  </HeroWrapper>
)

export default ImageTitle
