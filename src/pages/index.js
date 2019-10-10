import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Lightbox from "../components/lightbox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote"

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
      <Quote
        text={
          "life isn't about finding yourself.  it's about creating yourself."
        }
        author={"george bernard shaw"}
      />
      <Lightbox images={data.lifestyleImages.edges} />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default IndexPage
