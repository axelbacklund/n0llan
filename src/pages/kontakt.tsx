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

const ContactPage: React.FC<ContactProps> = ({ data: { msg } }) => (
  <Layout>
    <SEO title="Kontakt" />
    <Margin>
      <MaxWidth>
        <h1>Kontakt</h1>
        <br />
        <h3>Bra att ha</h3>
        <p>
          Natt-telefon: 073-052 99 54
          <br />
          Larmnummer: 08-790 77 00
          <br />
          Väktare på campus: 08-790 99 00
          <br />
          <br />
          n0llan kontaktar i första hand sina Faddrar eller C-Fadder Hugo vid
          frågor. För frågor om foton eller borttagning av bilder: kontakta
          C-Foci Gustav.
        </p>
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
