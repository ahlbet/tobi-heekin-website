import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "name_big_bw.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <img
      alt="Tobi Heekin Art"
      src={data.placeholderImage.childImageSharp.fluid.src}
    />
  )
}

export default Image
