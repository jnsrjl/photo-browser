import React, { Component } from 'react';
import { Link } from 'react-router';

import './Thumbnail.css';

class Thumbnail extends Component {
  render() {
    return (
      <div className="Thumbnail">
        <Link to={ "/photos/" + this.props.id }>
          <img src={ this.props.thumbnailUrl } alt={ this.props.title } />
        </Link>
      </div>
    );
  }
}

export default Thumbnail;
