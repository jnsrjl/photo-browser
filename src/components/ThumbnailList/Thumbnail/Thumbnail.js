import React, { Component } from 'react';

class Thumbnail extends Component {
  render() {
    return (
      <div>
        <img src={ this.props.thumbnailUrl } alt={ this.props.title } />
      </div>
    );
  }
}

export default Thumbnail;
