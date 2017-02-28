import React, { Component } from 'react';
import { Link } from 'react-router';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>Oh No!</h2>
        <p>You tripped and fell into the Ditch of 404</p>
        <Link to="/">Get to safety!</Link>
      </div>
    );
  }
}

export default NoMatch;
