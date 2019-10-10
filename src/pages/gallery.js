import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/lightbox"
import Quote from "../components/quote"

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      galleryImages: allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "gallery" } }
      ) {
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
      <Quote
        text={
          "the moment you accept what troubles you've been given, the door will open."
        }
        author={"rumi"}
      />
      <Lightbox images={data.galleryImages.edges} />
    </Layout>
  )
}

export default GalleryPage
