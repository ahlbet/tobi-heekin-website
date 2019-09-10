import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      gallery1: file(relativePath: { eq: "gallery1.jpg" }) {
        ...fluidImage
      }
      gallery2: file(relativePath: { eq: "gallery2.jpg" }) {
        ...fluidImage
      }
      gallery3: file(relativePath: { eq: "gallery3.jpg" }) {
        ...fluidImage
      }
      gallery4: file(relativePath: { eq: "gallery4.jpg" }) {
        ...fluidImage
      }
      gallery5: file(relativePath: { eq: "gallery5.jpg" }) {
        ...fluidImage
      }
      gallery6: file(relativePath: { eq: "gallery6.jpg" }) {
        ...fluidImage
      }
      gallery7: file(relativePath: { eq: "gallery7.jpg" }) {
        ...fluidImage
      }
      gallery8: file(relativePath: { eq: "gallery8.jpg" }) {
        ...fluidImage
      }
      gallery9: file(relativePath: { eq: "gallery9.jpg" }) {
        ...fluidImage
      }
      gallery10: file(relativePath: { eq: "gallery10.jpg" }) {
        ...fluidImage
      }
      gallery11: file(relativePath: { eq: "gallery11.jpg" }) {
        ...fluidImage
      }
      gallery12: file(relativePath: { eq: "gallery12.jpg" }) {
        ...fluidImage
      }
      gallery13: file(relativePath: { eq: "gallery13.jpg" }) {
        ...fluidImage
      }
      gallery14: file(relativePath: { eq: "gallery14.jpg" }) {
        ...fluidImage
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Img fluid={data.gallery1.childImageSharp.fluid} />
        <Img fluid={data.gallery2.childImageSharp.fluid} />
        <Img fluid={data.gallery3.childImageSharp.fluid} />
        <Img fluid={data.gallery4.childImageSharp.fluid} />
        <Img fluid={data.gallery5.childImageSharp.fluid} />
        <Img fluid={data.gallery6.childImageSharp.fluid} />
        <Img fluid={data.gallery7.childImageSharp.fluid} />
        <Img fluid={data.gallery8.childImageSharp.fluid} />
        <Img fluid={data.gallery9.childImageSharp.fluid} />
        <Img fluid={data.gallery10.childImageSharp.fluid} />
        <Img fluid={data.gallery11.childImageSharp.fluid} />
        <Img fluid={data.gallery12.childImageSharp.fluid} />
        <Img fluid={data.gallery13.childImageSharp.fluid} />
        <Img fluid={data.gallery14.childImageSharp.fluid} />
      </div>
      {/* <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link> */}
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
