import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Slideshow from "../components/slideshow"
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
        text="life isn't about finding yourself.  it's about creating yourself."
        author="george bernard shaw"
      />
      <Slideshow images={data.lifestyleImages.edges} />
    </Layout>
  )
}

export const fluidImage = graphql`fragment fluidImage on File {
  childImageSharp {
    gatsbyImageData(width: 700, layout: CONSTRAINED)
  }
}
`

export default IndexPage
