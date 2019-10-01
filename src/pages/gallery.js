import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = () => {
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
      <SEO title="Gallery" />
      <div>
        {data.galleryImages.edges.map(image => (
          <Img fluid={image.node.childImageSharp.fluid} />
        ))}
      </div>
    </Layout>
  )
}

export default GalleryPage
