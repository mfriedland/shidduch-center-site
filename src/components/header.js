import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'relative',
      top: 0,
      left: 0,
      height: '80px',
      width: '100%',
      zIndex: 101,
      display: 'inline-flex',
      flexDirection: 'row',
      marginBottom: `3.45rem`,
      background: `#fff`,
      padding: '0 25px',
      alignItems: 'flexStart',
      justifyContent: 'flexStart',
      textAlign: 'center',
      backfaceVisibility: 'hidden',
      borderBottom: '1px #DADADA solid',
    }}
  >
    <NYSC>
      <Link to='/'><HeaderLink>NYSC</HeaderLink></Link>
    </NYSC>
    <div
      style={{
        position: 'absolute',
        top: '25px',
        left: '25px',
      }}
    >
      <Link to='/who'><HeaderLink>Who</HeaderLink></Link>
      <Link to='/what'><HeaderLink>What</HeaderLink></Link>
      <Link to='/why'><HeaderLink>Why</HeaderLink></Link>
      <Link to='/where'><HeaderLink>Where</HeaderLink></Link>
    </div>
    <div
      style={{
        position: 'absolute',
        top: '25px',
        right: '25px',
      }}
    >
      <Link to='/when'><HeaderLink>When</HeaderLink></Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const HeaderLink = styled.div`
  text-align: center;
  font-family: serif;
  font-size: 1.25rem;
  color: #4A4A4A;
  display: inline-block;
  padding-right: 1.5rem;
  font-family: Georgia;
  text-decoration: none;
`
const NYSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 105;
  text-align: center;
  font-family: serif;
  font-size: 1.5rem !important;
  color: #4A4A4A;
  display: inline-block;
  padding-right: 1.5rem;
  font-family: cursive !important;
  text-decoration: none;
  margin-left: 49%
  margin-top: 25px;
`
const Questions = styled.div`
  flex: 9;
`
const When = styled.div`
  flex: 1;
`


export default Header
