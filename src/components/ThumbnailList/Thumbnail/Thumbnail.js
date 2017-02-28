import React, { Component } from 'react';

class Thumbnail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.thumbnailUrl} role="presentation" />
      </div>
    );
  }
}

export default Thumbnail;
