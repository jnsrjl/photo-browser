import React, { Component } from 'react';
import  axios from 'axios';

class PhotoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {}
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos/' + this.props.params.id)
      .then(res => {
        // Make urls https
        res.data.url = res.data.url.substring(0,4) + "s" + res.data.url.substring(4);
        this.setState({ photo: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <img src={this.state.photo.url} alt={this.state.photo.title} />
      </div>
    );
  }
}

export default PhotoView;