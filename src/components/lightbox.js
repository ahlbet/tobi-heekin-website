import React, { Component } from "react"

import Image from "next/image"
// import { GatsbyImage } from "gatsby-plugin-image"
import { info } from "../data/info.ts"

// import "./lightbox.scss"

class Lightbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      currentImage: 0,
    }
  }

  componentDidMount = () => {
    window.addEventListener("keyup", this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    console.log("clicked")
    this.setState({ isOpen: !this.state.isOpen, currentImage: index })
  }

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  goBack = () => {
    this.setState({ currentImage: this.state.currentImage - 1 })
  }

  goForward = () => {
    this.setState({ currentImage: this.state.currentImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.isOpen) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.currentImage > 0) {
          this.setState({ currentImage: this.state.currentImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.currentImage < this.props.images.length - 1) {
          this.setState({ currentImage: this.state.currentImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ isOpen: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const imagesCopy = images
    const { isOpen, currentImage } = this.state
    return (
      <div className="flex flex-col items-center">
        <div className="cursor-pointer" onClick={e => this.handleClick(e, 0)}>
          <Image
            src={images[0]}
            alt="Tobi Heekin Image"
            width={600}
            height={600}
            objectFit="contain"
          />
        </div>
        <hr />
        <div className="flex flex-col items-center">
          {imagesCopy.slice(1).map((image, i) => (
            <div className="column gallery__image" key={image}>
              <div
                className="cursor-pointer"
                onClick={e => this.handleClick(e, i + 1)}
              >
                <Image
                  src={image}
                  alt="Tobi Heekin Image"
                  width={600}
                  height={600}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </div>
        {isOpen && (
          <div
            className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-opacity-50 bg-black"
            onKeyUp={e => this.handleKeyDown(e)}
          >
            <div className="lightbox__content">
              <Image
                src={images[currentImage]}
                alt="Tobi Heekin Image"
                className="lightbox__image"
                width={600}
                height={600}
                objectFit="contain"
              />
              <div className="lightbox__controls">
                <button className="lightbox__button" onClick={this.closeModal}>
                  Close
                </button>

                <div className="lightbox__next">
                  <button
                    className="lightbox__button"
                    onClick={this.goBack}
                    disabled={currentImage === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="lightbox__button"
                    onClick={this.goForward}
                    disabled={currentImage === images.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div className="lightbox__info">
                <span>
                  {info[currentImage].title}
                  {"   "}
                </span>
                <span>
                  {info[currentImage].dimensions}
                  {"   "}
                </span>
                <span>{info[currentImage].materials} </span>
                {info[currentImage].sold && <span>SOLD</span>}

                {info[currentImage].cost && (
                  <span>{`$ ${info[currentImage].cost}`}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Lightbox
