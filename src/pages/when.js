import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const When = () => (
  <Layout>
    <SEO title="Page two" />
    <Header>When?</Header>
  </Layout>
)

const Header = styled.div`
  font-size: 2rem;
  color: #FF0083;
  margin-bottom: 2rem;
`

export default When
