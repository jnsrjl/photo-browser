import React, { Component } from 'react';
import { Link } from 'react-router';

class Thumbnail extends Component {
  render() {
    return (
      <div>
        <Link to={ "/photos/" + this.props.id }>
          <img src={ this.props.thumbnailUrl } alt={ this.props.title } />
        </Link>
      </div>
    );
  }
}

export default Thumbnail;
