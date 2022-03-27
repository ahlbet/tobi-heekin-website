import { graphql, useStaticQuery } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Image = () => {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "name_big_bw.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      alt="Tobi Heekin Art"
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
    />
  )
}

export default Image
