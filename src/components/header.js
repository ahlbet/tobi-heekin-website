import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Link to="/about/">About</Link>
      <div
        style={{
          width: `200px`,
          margin: `0 50px`,
        }}
      >
        <Link to="/">
          <Image />
        </Link>
      </div>
      <Link to="/gallery/">Gallery</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
