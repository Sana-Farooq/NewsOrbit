import React, { Component } from 'react'
import spinnerImage from './spinnerImage.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img  src={spinnerImage} style={{marginBottom: "10px"}} alt="loading" />
      </div>
    )
  }
}

export default Spinner
