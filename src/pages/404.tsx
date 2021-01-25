import React from 'react'

import Layout from '../components/layout'
import Margin from '../components/Margin'
import SEO from '../components/seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Margin>
      <h1>404: Sidan kunde inte hittas</h1>
      <p>Här fanns det ingenting n0llan! Försök att gå tillbaka.</p>
    </Margin>
  </Layout>
)

export default NotFoundPage
