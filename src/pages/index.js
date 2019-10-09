import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Lightbox from "../components/lightbox"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      lifestyleImages: allFile(
        sort: { fields: name, order: ASC }
        filter: { relativeDirectory: { eq: "lifestyle" } }
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
      <SEO title="Home" />
      <Lightbox images={data.lifestyleImages.edges} />
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
