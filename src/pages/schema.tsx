import { graphql } from 'gatsby'
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

interface SchemaProps {
  data: GatsbyTypes.SchemaQuery
}

const SchemaPage: React.FC<SchemaProps> = ({ data: { pageContent } }) => (
  <Layout>
    <SEO title="Schema" />
    <Margin>
      <MaxWidth>
        <h1>Schema</h1>
        <ScheduleWrapper>
          {pageContent && pageContent.html && (
            <div dangerouslySetInnerHTML={{ __html: pageContent.html }} />
          )}
        </ScheduleWrapper>
      </MaxWidth>
    </Margin>
    <PhotoShowcase />
  </Layout>
)

export const query = graphql`
  query Schema {
    pageContent: markdownRemark(frontmatter: { slug: { eq: "/schema" } }) {
      html
    }
  }
`

export default SchemaPage
