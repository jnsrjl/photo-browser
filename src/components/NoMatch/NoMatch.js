import React, { Component } from 'react';
import { Link } from 'react-router';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>You tripped and fell into the Ditch of 404</h2>
        <Link to="/">Get to safety!</Link>
      </div>
    );
  }
}

export default NoMatch;
