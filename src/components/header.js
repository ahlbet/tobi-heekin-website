import "./header.scss"

import Image from "./image"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"
import sketch from "./sketch"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__links">
      <Link to="/about/">About</Link>
      <div className="header__logo">
        <Link to="/">
          <Image />
        </Link>
      </div>
      <Link to="/gallery/">Gallery</Link>
    </div>
    <div className="header__canvas">
      <ReactP5Wrapper sketch={sketch} />
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
