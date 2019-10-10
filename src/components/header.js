import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import P5Wrapper from "react-p5-wrapper"

import Image from "./image"
import sketch from "./sketch"
import "./header.scss"

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
    <P5Wrapper sketch={sketch} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
