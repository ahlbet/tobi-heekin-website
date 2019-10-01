import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      galleryImages: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            ...fluidImage
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {data.galleryImages.edges.map(image => (
          <Img fluid={image.node.childImageSharp.fluid} />
        ))}
      </div>
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default IndexPage
