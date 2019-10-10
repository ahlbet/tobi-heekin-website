import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quote from "../components/quote"

import "./about.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "head-shot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <Quote
        text={"wrinkles should merely indicate where smiles have been."}
        author={"mark twain"}
      />
      <div className="about columns">
        <div className="about__image column">
          <Img fluid={data.aboutImage.childImageSharp.fluid} />
        </div>
        <p className="about__text column">
          Tobi describes herself as a 'proud lowa girl'. After growing up in Des
          Moines and graduating from the University of lowa she hightailed it to
          the Chicago to seek new adventures. After working and enjoying the
          city life for 16 years, she decided to settle in the suburbs to raise
          her daughter. In 2009, Tobi and her daughter were in a serious car
          accident. Fortunately, her daughter was not injured, but Tobi suffered
          a spinal cord injury which paralyzed her from the waist down. She
          spent the next 18 months re-"abilitating" at the Shirley Ryan
          AbilityLab in order to regain strength and mobility. Tobi continues to
          utilize the many offerings at the AbilityLab. She began doing art
          therapy two years ago with the assumption that it would help her
          dexterity. Tobi quickly learned that it was much more. The therapy
          enabled her to release and express her emotions and feelings on paper.
          Whether they be joyful, sad, frustrated or courageous. Tobi can now
          look at her work and see the empowerment and beauty that lives inside
          her. Today, Tobi says she lives a life of gratitude and has so many
          wonderful blessings
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
