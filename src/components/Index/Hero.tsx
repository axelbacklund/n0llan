import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'
import { colors, fonts, spacings } from '../../styles/constants'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HeroWrapper = styled.div`
  background-color: ${colors.gray};
  padding: ${spacings.horizontal};
  padding-top: 0;
`

const HeroBackground = styled(BackgroundImage)`
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroText = styled.div`
  font-size: 3.5rem;
  margin-top: 3rem;
  font-family: ${fonts.termina};
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  max-width: 40rem;
  text-align: center;
  text-shadow: 0 2px 20px black;
`

const Hero: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.HeroBackgroundQuery>(
    graphql`
      query HeroBackground {
        heroBackground: file(
          relativePath: { eq: "photos/50236302556_29fa3960b2_k.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  )

  const imageData = data.heroBackground?.childImageSharp?.fluid

  return (
    <HeroWrapper>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <HeroBackground fluid={imageData} backgroundColor={`#040e18`}>
          <HeroText>Mottagningen 2021</HeroText>
        </HeroBackground>
      </motion.div>
    </HeroWrapper>
  )
}

export default Hero
