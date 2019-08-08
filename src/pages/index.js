import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Container>
        <Logo>New York Shidduch Center</Logo>
        <Title>Forget Everything You Know About Shidduchim</Title>
        <Text>Shadchanim who care. Programs curated for you. Helping you find your bashert.</Text>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
        <Link to="/get-involved"><Button>Get Involved</Button></Link>
      {/* </div> */}
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  text-align: center;
  font-family: serif;
  color: #4A4A4A;
`
const Logo = styled.div`
  font-size: 2rem;
  font-family: serif;
  color: #4A4A4A;
  margin-bottom: 5rem;
`
const Title = styled.div`
  font-size: 4rem;
  font-family: Georgia;
  color: #4A4A4A;
  margin-bottom: 4rem;
  text-wrap: wrap;
  line-height: 1.4;
`
const Text = styled.div`
  font-size: 1.25rem;
  font-family: lato;
  color: #4A4A4A;
`
const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF0083;
  color: #fff;
  border: 0;
  box-shadow: 0px 10px 40px -10px rgba(255,0,131,0.5);
  font-size: 1.5rem;
  font-weight: 700;
  font-family: sans-serif;
  font-decoration: none;
  transition: all 0.2s, transform 0.5s;
  display: inline-block;
  height: 4rem;
  border-radius: 5px;
  overflow: hidden;
  white-space: nowrap;
  padding: 20px 45px;
  text-overflow: ellipsis;
  margin-top: 4rem;
`