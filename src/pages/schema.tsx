import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import PhotoShowcase from '../components/PhotoShowcase'
import SEO from '../components/seo'

const ScheduleWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
`

const SchemaPage: React.FC = () => (
  <Layout>
    <SEO title="Schema" />
    <Margin>
      <MaxWidth>
        <h1>Schema</h1>
        <ScheduleWrapper>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FStockholm&amp;src=dmx1aWwyMGpmcjFmM2ltbDF1cDZlM3MyY2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB"
            style={{ border: 'none', width: '100%' }}
            height="600"
            scrolling="no"
          ></iframe>
        </ScheduleWrapper>
      </MaxWidth>
    </Margin>
    <PhotoShowcase />
  </Layout>
)

export default SchemaPage
