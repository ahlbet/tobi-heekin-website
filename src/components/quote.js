import React from "react"
import PropTypes from "prop-types"

import "./quote.scss"

const Quote = props => (
  <div className="quote">
    <p className="quote__text">{props.text}</p>
    <p className="quote__author">- {props.author}</p>
  </div>
)

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Quote
