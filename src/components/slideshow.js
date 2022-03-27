import "./slideshow.scss"

import React, { useState } from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import useInterval from "../hooks/useInterval"

const Slideshow = props => {
  const { images } = props

  const [currentImage, setCurrentImage] = useState(0)

  useInterval(() => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }, 4500)

  return (
    <div className="slideshow">
      <GatsbyImage
        alt="Tobi Heekin Image"
        image={images[currentImage].node.childImageSharp.gatsbyImageData}
      />
    </div>
  )
}

export default Slideshow
