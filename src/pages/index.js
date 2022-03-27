import Layout from "../components/layout"
import Quote from "../components/quote"
import React from "react"
import SEO from "../components/seo"
import Slideshow from "../components/slideshow"
import fs from "fs"
import { join } from "path"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Quote
        text="life isn't about finding yourself.  it's about creating yourself."
        author="george bernard shaw"
      />
      <Slideshow images={props.images} />
    </Layout>
  )
}

export function getStaticProps() {
  const images = fs
    .readdirSync(join(process.cwd(), "public/images/lifestyle"))
    .map(file => `/images/lifestyle/${file}`)

  return { props: { images } }
}

export default IndexPage
