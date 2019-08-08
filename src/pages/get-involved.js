import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const What = () => (
  <Layout>
    <SEO title="Page two" />
    <Header>Get Involved</Header>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

const Header = styled.div`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #FF0083;
`

export default What
