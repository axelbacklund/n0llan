import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import PhotoShowcase from '../components/PhotoShowcase'
import SEO from '../components/seo'
import { breakpointsDown, colors, spacings } from '../styles/constants'

const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 calc(-1 * ${spacings.horizontal} / 2);
  margin-top: 1rem;

  @media ${breakpointsDown.desktop} {
    margin: 0 calc(-1 * ${spacings.horizontalMobile} / 2);
    margin-top: 1rem;
  }
`

const Company = styled.div`
  width: 33%;
  height: 20rem;
  padding: calc(${spacings.horizontal} / 2);

  @media ${breakpointsDown.desktop} {
    padding: calc(${spacings.horizontalMobile} / 2);
    height: 14rem;
  }

  @media ${breakpointsDown.tablet} {
    width: 50%;
    height: 12rem;
  }
`

const CompanyInside = styled.div`
  background-color: ${colors.gray};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

interface SponsorsProps {
  data: GatsbyTypes.SponsorsQuery
}

const SponsorsPage: React.FC<SponsorsProps> = ({ data: { sponsors } }) => (
  <Layout>
    <SEO title="Schema" />
    <Margin>
      <h1>Medverkande företag</h1>
      <CompanyWrapper>
        {sponsors.edges.map((item) => (
          <Company key={item.node.frontmatter?.name}>
            <a
              target="_blank"
              rel="noreferrer"
              href={item.node.frontmatter?.link}
            >
              <CompanyInside>
                <img
                  alt={item.node.frontmatter?.image}
                  src={item.node.frontmatter?.image}
                />
              </CompanyInside>
            </a>
          </Company>
        ))}
      </CompanyWrapper>
    </Margin>
    <PhotoShowcase />
  </Layout>
)

export const query = graphql`
  query Sponsors {
    sponsors: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fields: { collection: { eq: "sponsors" } } }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            name
            image
            link
          }
        }
      }
    }
  }
`

export default SponsorsPage
