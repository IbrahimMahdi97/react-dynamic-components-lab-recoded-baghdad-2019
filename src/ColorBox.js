import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      if (this.props.opacity >= 2) {
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBoxes opacity={this.props.opacity - 1} />
      </div>
    } else {
      return null
    }
    )
  }

}
