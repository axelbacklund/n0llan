import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import MaxWidth from '../components/MaxWidth'
import SEO from '../components/seo'
import ImageTitle from '../components/ImageTitle'
import LargeLink from '../components/LargeLink'

interface AboutProps {
  data: GatsbyTypes.AboutQuery
}

const AboutPage: React.FC<AboutProps> = ({
  data: { titleBackground, osaItems },
}) => (
  <Layout>
    <SEO title="Om mottagningen" />
    {titleBackground && titleBackground.childImageSharp && (
      <ImageTitle
        title="Om mottagningen"
        image={titleBackground.childImageSharp.fluid}
      />
    )}
    <Margin>
      <MaxWidth>
        <h3>
          Välkommen till Sektionen för Industriell Ekonomi och Mottagningen
          2021!
        </h3>
        <p>
          Det är nu det börjar! Sektionen har ett sprudlande studentliv och
          under våren arbetar 150 engagerade studenter för att på bästa sätt ta
          emot en ny årgång med öppna armar. För att ni nyantagna ska få lära
          känna er klass och få en så bra start som möjligt på er tid på KTH
          börjar ert äventyr med Mottagningen! Det har inte gått att undgå att
          2020 varit ett väldigt speciellt år, större delen av vår tillvaro har
          präglats av covid-19 eller corona. Årets Mottagning kommer likväl
          påverkas av corona, här kommer en beskrivning på de åtgärder vi vidtar
          för att minska risken av smittspridning under våra event. När ni
          kommer till campus morgonen den 10/8 kommer vi dela in er i 16 små
          grupper, även kallade Faddergrupper. Det är i dessa grupper ni kommer
          genomföra Mottagningen. Dessa 16 grupper delas sedan in i fyra grupper
          om fyra små grupper, de större grupperna kallas för Gudfaddergrupper
          och ni kommer inte interagera med någon utanför er Gudfaddergrupp
          under något event. När vi har stationsaktiviteter som kräver större
          grupper än tolv personer har ni en annan Faddergrupp, samma hela
          tiden, som ni blandas med. Vi har även valt att flytta ut majoriteten
          av våra aktiviteter utomhus för att vi ska kunna sprida ut oss på ett
          bra sätt och hålla det avstånd som Folkhälsomyndigheten rekommenderar
          så var gärna beredd på att ta med regnjackan om det ser ut att bli
          dåligt väder. Vi kommer under Mottagningen genomföra middagar eller
          sittningar som vi kallar dom i ett tält utomhus. Ni kommer här sitta
          vid bord om 12 personer som är distanserade från varandra enligt FHMs
          rekommendationer för restauranger. Vi kommer alltid att sitta ner
          under dessa tillställningar, det kommer aldrig finnas ett dansgolv
          eller liknande för att minska risken för smittspridning. Efterfesterna
          till sittningen kommer vara ett pub-liknande event där ni sitter kvar
          vid era middagsbord och med hjälp av ett digitalt kösystem får
          möjlighet att köpa från en bar som vi ställer upp i tältet. Det är
          viktigt för oss att ni känner er trygga under ert deltagande i
          Mottagningen 2020. Mottagningen börjar i samband med uppropet och
          innebär spännande aktiviteter från morgon till kväll. Ni får en
          introduktion till sektionens traditioner och går på sittningar som
          består av middag, sång, framträdanden och tillhörande efterfester. För
          det mesta rör vi oss omkring på Campus för att ni ska bli bekanta med
          KTH’s områden men ibland åker vi iväg till andra platser i Stockholm.
          Allt deltagande i Mottagningen är helt frivilligt (Uppropet är dock
          obligatoriskt. Kan du inte komma på uppropet måste du kontakta
          studievägledare Kim Leinervall på svl-cinek@itm.kth.se). Några dagar
          innan uppropet kommer du att kontaktas av en av dina Faddrar som
          stämmer av läget inför uppropet och påminner om vad som är bra att ha
          tillgängligt under Mottagningen (se nedan). Ett par veckor innan
          uppropet släpps schemat för de två första veckorna på KTHs hemsida och
          sedan två veckor i taget. Har du några frågor innan dess är du varmt
          välkommen att kontakta ÖPH (Överphösare) som är ansvariga för
          Mottagningen. ÖPH 2020 är David Rothman nås på oph@iare.nu. Vi vill
          också förtydliga att Mottagningen inte ska förväxlas med en
          ”nollning”, utan vi tar avstånd från alla former av diskriminering,
          trakasserier och tvång till alkoholkonsumtion. Mottagningen är en
          plats där alla ska känna sig välkomna, inkluderade och trygga.
        </p>
        <br />
        <h2>Länkar till mer nyttig info</h2>
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
  query About {
    titleBackground: file(relativePath: { eq: "photos/kth.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    osaItems: allMarkdownRemark(
      filter: { fields: { collection: { eq: "info-links" } } }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`

export default AboutPage
