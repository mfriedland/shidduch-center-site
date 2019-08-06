import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const What = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Get Involved</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default What
