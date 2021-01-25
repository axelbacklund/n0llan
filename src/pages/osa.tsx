import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import SEO from '../components/seo'
import ImageTitle from '../components/ImageTitle'
import LargeLink from '../components/LargeLink'

interface OsaProps {
  data: GatsbyTypes.OSAQuery
}

const OsaPage: React.FC<OsaProps> = ({
  data: { titleBackground, osaItems },
}) => (
  <Layout>
    <SEO title="OSA" />
    {titleBackground && titleBackground.childImageSharp && (
      <ImageTitle title="OSA" image={titleBackground.childImageSharp.fluid} />
    )}
    <Margin>
      <MaxWidth>
        <h3>Hej n0llan!</h3>
        <p>
          På denna sida kommer det att komma upp länkar till formulären där ni
          OSAr till Mottagningens sittningar. OSAn stänger 13:00 dagen innan
          sittningen om inget annat kommuniceras, men Festgruppen hälsar att de
          gärna vill att ni OSAr så snart ni kan för att underlätta deras
          planering – så OSA direkt vetja! Betalningar för sittningarna görs via
          sektionens officiella hemsida iare.one genom kortbetalning. Blir något
          fel i din OSA går det bra att kontakta ED Alexandra Munthe Nilsson på
          073-041 13 84.
        </p>
        <br />
        {osaItems.edges.map((item) => (
          <LargeLink
            key={item.node.frontmatter?.link}
            link={item.node.frontmatter?.link ?? ''}
            title={item.node.frontmatter?.title ?? ''}
          />
        ))}
      </MaxWidth>
    </Margin>
  </Layout>
)

export const query = graphql`
  query OSA {
    titleBackground: file(
      relativePath: { eq: "photos/46386727345_1579658c1b_k.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    osaItems: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___date] }
      filter: { fields: { collection: { eq: "osa" } } }
      limit: 10
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            date(formatString: "DD MMMM YYYY", locale: "sv")
          }
        }
      }
    }
  }
`

export default OsaPage
