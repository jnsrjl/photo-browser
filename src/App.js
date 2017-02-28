import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/photos">Photos</Link></li>
        </ul>

        { this.props.children }
      </div>
    );
  }
}

export default App;
