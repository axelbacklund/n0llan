import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/Index/Hero'
import Shortcut from '../components/Index/Shortcut'
import Margin from '../components/Margin'

import SIcon from '../images/icons/CalendarIcon.svg'
import MediaIcon from '../images/icons/MediaIcon.svg'
import OSAIcon from '../images/icons/OSAIcon.svg'
import { breakpointsDown } from '../styles/constants'
import News from '../components/Index/News'
import PhotoShowcase from '../components/PhotoShowcase'
import { motion } from 'framer-motion'

const ShortcutWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakpointsDown.desktop} {
    flex-direction: column;
  }
`

const Divider = styled.div`
  width: 4rem;
  height: 1rem;
`

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Mössan n0llan!" />
    <Hero />
    <Margin>
      <ShortcutWrapper>
        <Shortcut
          name="Schema"
          link="/schema"
          icon={SIcon}
          color="darkBlue"
          delay={0.5}
        />
        <Divider />
        <Shortcut
          name="Media"
          link="/media"
          icon={MediaIcon}
          color="porter"
          delay={0.6}
        />
        <Divider />
        <Shortcut
          name="OSA"
          link="/osa"
          icon={OSAIcon}
          color="darkRed"
          delay={0.7}
        />
      </ShortcutWrapper>
      <News />
    </Margin>
    <PhotoShowcase />
  </Layout>
)

export default IndexPage
