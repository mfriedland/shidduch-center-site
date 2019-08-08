import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Who = () => (
  <Layout>
    <SEO title="Page two" />
    <Header>Who?</Header>

    <p>Right now there's us - a dedicated group of individuals who care so deeply about</p>
    <div style={{marginLeft: '1rem'}}>
      {/* <p>you. You may be single, divorced, widowed, in a difficult relationship or marriage</p> */}
      <p><span style={{fontWeight: 'bold', color: '#FF0083'}}>you.</span> You are wonderful, good, ehrlich and mentchlikite, healthy and normal, growth oriented.</p>
      <p><span style={{fontWeight: 'bold', color: '#FF0083'}}>you.</span> You are frum, committed to halacha, and continually growining in your ruchnius</p>
      <p><span style={{fontWeight: 'bold', color: '#FF0083'}}>you.</span> You are looking to get married, seeking dating advice, and</p>
    </div>
  </Layout>
)

export default Who

const Header = styled.div`
  font-size: 2rem;
  color: #FF0083;
  margin-bottom: 2rem;
`