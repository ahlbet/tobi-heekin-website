import HeaderImage from "./image"
import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import dynamic from "next/dynamic"
// import { ReactP5Wrapper } from "react-p5-wrapper"
import sketch from "./sketch"

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then(mod => mod.ReactP5Wrapper),
  { ssr: false }
)

const Header = ({ siteTitle }) => (
  <header className="mb-3 flex items-center flex-col py-2">
    <div className="flex m-auto justify-center items-center">
      <Link href="/about/">
        <a>About</a>
      </Link>
      <div className="w-24 md:w-32 lg:w-52 mx-5">
        <Link href="/">
          <a>
            <HeaderImage />
          </a>
        </Link>
      </div>
      <Link href="/gallery/">
        <a>Gallery</a>
      </Link>
    </div>
    <div className="max-w-full">
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
