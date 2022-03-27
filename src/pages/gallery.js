import Layout from "../components/layout"
import Lightbox from "../components/lightbox"
import Quote from "../components/quote"
import React from "react"
import SEO from "../components/seo"
import fs from "fs"
import { join } from "path"

const GalleryPage = props => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Quote
        text={
          "the moment you accept what troubles you've been given, the door will open."
        }
        author={"rumi"}
      />
      <Lightbox images={props.images} />
    </Layout>
  )
}

export function getStaticProps() {
  const images = fs
    .readdirSync(join(process.cwd(), "public/images/gallery"))
    .map(file => `/images/gallery/${file}`)

  return { props: { images } }
}

export default GalleryPage
