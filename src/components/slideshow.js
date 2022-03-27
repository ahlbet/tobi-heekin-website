import React, { useState } from "react"

import Image from "next/image"
// import { GatsbyImage } from "gatsby-plugin-image"
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
    <div className="flex justify-center">
      <Image
        alt="Tobi Heekin Image"
        src={images[currentImage]}
        width={600}
        height={600}
        objectFit="contain"
      />
    </div>
  )
}

export default Slideshow
