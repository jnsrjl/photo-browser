import React, { Component } from 'react';
import axios from 'axios';

import Thumbnail from './Thumbnail/Thumbnail';

class ThumbnailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos?_page=2&_limit=50')
      .then(res => {
        this.setState({ photos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>ThumbnailList</h2>
        { this.renderThumbnails() }
      </div>
    );
  }

  renderThumbnails() {
    return this.state.photos.map((photo, id) => (
      <Thumbnail
        key={ "thumbnail_" + id }
        thumbnailUrl={ photo.thumbnailUrl }
      />
    ));
  }
}

export default ThumbnailList;
