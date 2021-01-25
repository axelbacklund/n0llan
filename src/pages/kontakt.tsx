import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Person from '../components/Contact/Person'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import PhotoShowcase from '../components/PhotoShowcase'
import SEO from '../components/seo'

interface ContactProps {
  data: GatsbyTypes.ContactQuery
}

const MSGWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1.5rem 0 3rem 0;
`

const ContactPage: React.FC<ContactProps> = ({
  data: { msg, pageContent },
}) => (
  <Layout>
    <SEO title="Kontakt" />
    <Margin>
      <MaxWidth>
        <h1>Kontakt</h1>
        <br />
        <h3>{pageContent?.frontmatter?.title}</h3>
        {pageContent && pageContent.html && (
          <div dangerouslySetInnerHTML={{ __html: pageContent.html }} />
        )}
        <br />
      </MaxWidth>
      <h2>MSG</h2>
      <MSGWrapper>
        {msg.edges.map((item) => (
          <Person
            key={item.node.frontmatter?.position}
            name={item.node.frontmatter?.name ?? ''}
            title={item.node.frontmatter?.position ?? ''}
            phone={item.node.frontmatter?.phone ?? ''}
            image={item.node.frontmatter?.image ?? ''}
          />
        ))}
      </MSGWrapper>
    </Margin>
    <PhotoShowcase />
  </Layout>
)

export const query = graphql`
  query Contact {
    pageContent: markdownRemark(frontmatter: { slug: { eq: "/kontakt" } }) {
      html
      frontmatter {
        title
      }
    }
    msg: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fields: { collection: { eq: "msg" } } }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            name
            position
            phone
            image
          }
        }
      }
    }
  }
`

export default ContactPage
