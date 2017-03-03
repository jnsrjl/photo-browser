import React, { Component } from 'react';
import axios from 'axios';

import Thumbnail from './Thumbnail/Thumbnail';

import './ThumbnailList.css';

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
        const data = addHTTPS(res.data);
        this.setState({ photos: data });
      })
      .catch(err => {
        console.log(err);
      });

    // Return thumbnailUrls with https instead of http
    function addHTTPS(arr) {
      for(var i = 0; i < arr.length; i++) {
        var url = arr[i].thumbnailUrl;
        arr[i].thumbnailUrl = url.substring(0,4) + "s" + url.substring(4);
      }

      return arr;
    }
  }

  render() {
    return (
      <div className="ThumbnailList">
        { this.renderThumbnails() }
      </div>
    );
  }

  renderThumbnails() {
    return this.state.photos.map((photo, id) => (
      <Thumbnail
        key={ "thumbnail_" + id }
        thumbnailUrl={ photo.thumbnailUrl }
        title={ photo.title }
        id={ photo.id }
      />
    ));
  }
}

export default ThumbnailList;
