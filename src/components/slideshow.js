import React, { useState } from "react"

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
  }, 4500)

  return (
    <div className="slideshow">
      <img
        alt="Tobi Heekin Image"
        src={images[currentImage].node.childImageSharp.fluid.src}
      />
    </div>
  )
}

export default Slideshow
