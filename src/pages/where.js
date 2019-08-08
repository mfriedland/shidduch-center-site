import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Where = () => (
  <Layout>
    <SEO title="Page two" />
    <Header>Where?</Header>

    <p>We're not sure if there will be a dedicated physical location, but we'd love to have one.</p>
    <p>Imagine a center that has a fully functioning coffee shop, with ping pong table, darts, a bookshelf full of boardgames and puzzles, and other fun activities and games. The atmosphere a coalescence of coffee grinders making fresh ice coffee for post seminary Stern girls, the laugh of strangers on their first date by the air hockey table, the flirtatious glances of two visitors across the tables as they peek up from their laptops.
    </p>
  </Layout>
)

const Header = styled.div`
  font-size: 2rem;
  color: #FF0083;
  margin-bottom: 2rem;
`

export default Where
