import PropTypes from "prop-types"
import React from "react"

const Quote = props => (
  <div className="border-t-2 border-b-2 border-black mx-auto my-10 w-11/12 p-4">
    <p className="m-0 p-0 font-semibold">{props.text}</p>
    <p className="m-0 p-0">- {props.author}</p>
  </div>
)

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Quote
