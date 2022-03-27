// import { graphql, useStaticQuery } from "gatsby"

import Image from "next/image"
// import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import headerPic from "../../public/images/name_big_bw.png"

const HeaderImage = () => {
  return <Image alt="Tobi Heekin Art" src={headerPic} />
}

export default HeaderImage
