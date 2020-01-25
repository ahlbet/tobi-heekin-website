import React, { useEffect, useState } from "react"

import Img from "gatsby-image"
import useInterval from "../hooks/useInterval"

import "./slideshow.scss"

const Slideshow = props => {
  const { images } = props

  const [currentImage, setCurrentImage] = useState(0)

  useInterval(() => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }, 6000)

  return (
    <div className="slideshow">
      <Img
        alt="Tobi Heekin Image"
        fluid={images[currentImage].node.childImageSharp.fluid}
      />
    </div>
  )
}

export default Slideshow
