import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link> */}
  </Layout>
)

export default IndexPage
