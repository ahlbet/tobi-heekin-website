import React, { Component } from "react"

import Img from "gatsby-image"

import "./lightbox.scss"

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
    const { isOpen, currentImage } = this.state
    return (
      <div className="gallery">
        <div className="columns is-mobile is-multiline">
          {images.map((image, i) => (
            <a
              onClick={e => this.handleClick(e, i)}
              key={image.node.childImageSharp.fluid.src}
              className="column gallery__image"
            >
              <Img fluid={image.node.childImageSharp.fluid} />
            </a>
          ))}
        </div>

        {isOpen && (
          <div className="lightbox" onKeyUp={e => this.handleKeyDown(e)}>
            <div className="lightbox__content">
              <Img fluid={images[currentImage].node.childImageSharp.fluid} />
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
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Lightbox
