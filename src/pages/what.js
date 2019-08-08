import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const What = () => (
  <Layout>
    <SEO title="Page two" />
    <Header>What<span style={{color: '#4A4A4A'}}> we believe is possible</span>?</Header>
    {/* <p><span style={{fontWeight: 'bold', color: '#FF0083'}}> */}
    <h3 style={{textDecoration: 'underline'}}>Education:</h3>
    <p>Workshops on how to date / relationship & marriage workshops (for engagement and marriage)</p>
    <p>Dating coaches</p>
    <p>Relationship therapists (for couples or singles)</p>
    <hr></hr>

    <h3 style={{textDecoration: 'underline'}}>Events:</h3>
    <p>Singles events</p>
    <p>Chessed organizations (where singles can work on projects)</p>
    <hr></hr>

    <h3 style={{textDecoration: 'underline'}}>Support:</h3>
    <p>Chizuk events</p>
    <p>Peer (support) groups formed from workshops and classes</p>
    <p>Date ideas (e.g. I want to create a NY scavenger hunt date, free board game rentals, etc.)</p>
    <p>Scholarship fund - financial support for dates/engagements to those who need</p>
    <p>Guranteed shadchanis</p>
    <hr></hr>

    <h3 style={{textDecoration: 'underline'}}>Shidduchim:</h3>
    <p>A systemized way of interviewing singles that lead to understanding them and them feeling understood</p>
    <p>Background checks (where we as an organization take achrayus for the people we work with and thus do a certain level of investigation)</p>
    <p>Coaching</p>
    <p>Tracking - keeping up with each single in the process (and also maintain high level of conduct)</p>
    <p>Selectivity - not in terms of exclusiveness, but to ensure we work with mentchlikite individuals</p>
  </Layout>
)

const Title = styled.div`
  font-size: 1.25rem;
  margin-bottom: 3rem;
`
const Header = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #FF0083;
`

export default What
