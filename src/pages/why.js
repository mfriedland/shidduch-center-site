import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Why = () => (
  <Layout>
    <SEO title="Page two" />
    <Header>Why?</Header>
    <p>
      To parents, singles, and shadchanim: we personally feel the pain of the shidduch crisis, we’re involved because we have a child in the parsha or we believe this is an avodas kodesh, and we’re doing something about it because we know something must be done.
    </p>
    <p>
      I do shidduchim because I see people struggling. Singles misunderstood by shadchanim, shadchanim overwhelmed, dates suggested with no shaychis of it being matim, horror date stories, divorces from information that should've been known beforehand, agmas nefesh, too much money spent, bitul Torah, solid people who strayed because of the pain/time/energy, and the list goes on.
    </p>
    <p>
      Thankfully, there have been new initiatives. Some pay to help older girls, WhatsApp groups formed for collaboration, more events than ever are happening, and organizations like the Baltimore (& Detroit & Toronto) Shidduch Center that have blossomed to show singles that there are those who care.
    </p>
    <p>
      In the wilderness of NY however, chaos exists and thrives. And as singles from around the world congregate here for shidduchim, we have all the more reason to create something. From West to East we have communities in NJ (Passaic, Edison/Highland Park, etc.) to Monsey, Wash Heights, and the UWS, to the trichotomy of Brooklyn, Queens, and the 5Towns. It could be that one center for all is too much, but halavi that we start with that and break up into branches.
    </p>
    <p>
      I’m trying to start an initiative for us in NY and I’m enrolling you to be involved.
    </p>
  </Layout>
)

const Header = styled.div`
  font-size: 2rem;
  color: #FF0083;
  margin-bottom: 2rem;
`

export default Why
