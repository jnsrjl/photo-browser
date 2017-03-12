import React, { Component } from 'react';
import axios from 'axios';

import './PhotoView.css';

class PhotoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      album: "",
      user: ""
    }
  }

  componentDidMount() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/';

    // Fetch photo based on url : photos/:id
    axios.get(baseUrl + "photos/" + this.props.params.id)
      .then(res => {
        // Make photo.url https
        res.data.url = res.data.url.substring(0,4) + "s" + res.data.url.substring(4);
        this.setState({ photo: res.data });

        // Photo's albumId for the next fetch
        return res.data.albumId;
      })
      .then(id => axios.get(baseUrl + "albums/" + id))
      .then(res => {
        this.setState({ album: res.data })

        // Album's userId for the next fetch
        return res.data.userId;
      })
      .then(id => axios.get(baseUrl + "users/" + id))
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(err => {
          if (err.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log(err.message);
          }
          console.log(err.config);
        });
  }

  render() {
    return (
      <div>
        <div className="PhotoContainer">
          <img src={this.state.photo.url} alt={this.state.photo.title} />
        </div>
        <div className="PhotoDetails">
          <ul>
            <li><strong>{ this.state.photo.title }</strong></li>
            <li>by <strong>{ this.state.user.name }</strong></li>
            <li>in album <strong>{ this.state.album.title }</strong></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PhotoView;
