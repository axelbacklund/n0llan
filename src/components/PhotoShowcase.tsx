import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { breakpointsDown, colors, spacings } from '../styles/constants'

const ImageWrapper = styled.div`
  background-color: ${colors.gray};
  padding: ${spacings.horizontal};
  display: flex;
  flex-direction: row;

  @media ${breakpointsDown.desktop} {
    padding: ${spacings.horizontalMobile};
  }

  @media ${breakpointsDown.tablet} {
    flex-direction: column;
  }
`

const ShowcaseImage = styled(BackgroundImage)`
  width: 100%;
  height: 30rem;

  @media ${breakpointsDown.tablet} {
    height: 20rem;
  }
`

const Divider = styled.div`
  height: ${spacings.horizontalMobile};
  width: ${spacings.horizontal};
`

const PhotoShowcase: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.ShowcaseQuery>(
    graphql`
      query Showcase {
        firstShowcase: file(
          relativePath: { eq: "photos/46578413394_a8cfda62f5_k.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondShowcase: file(
          relativePath: { eq: "photos/50229548662_26d51fc937_k.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  )

  const firstImageData = data.firstShowcase?.childImageSharp?.fluid
  const secondImageData = data.secondShowcase?.childImageSharp?.fluid

  return (
    <ImageWrapper>
      <ShowcaseImage fluid={firstImageData} backgroundColor={`#040e18`} />
      <Divider />
      <ShowcaseImage fluid={secondImageData} backgroundColor={`#040e18`} />
    </ImageWrapper>
  )
}

export default PhotoShowcase
