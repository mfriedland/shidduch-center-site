import React from "react"
import { Link } from "gatsby"
import styled, { css } from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const What = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>What?</h1>
    <Title>What I believe is possible:</Title>

    <h4>Education:</h4>
    <p>Workshops on how to date / relationship & marriage workshops (for engagement and marriage)</p>
    <p>Dating coaches</p>
    <p>Relationship therapists (for couples or singles)</p>
    <hr></hr>

    <h4>Events:</h4>
    <p>Singles events</p>
    <p>Chessed organizations (where singles can work on projects)</p>
    <hr></hr>

    <h4>Support:</h4>
    <p>Chizuk events</p>
    <p>Peer (support) groups formed from workshops and classes</p>
    <p>Date ideas (e.g. I want to create a NY scavenger hunt date, free board game rentals, etc.)</p>
    <p>Scholarship fund - financial support for dates/engagements to those who need</p>
    <p>Guranteed shadchanis</p>
    <hr></hr>

    <h4>Shidduchim:</h4>
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

export default What
