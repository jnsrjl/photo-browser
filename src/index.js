import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import About from './components/About/About';
import ThumbnailList from './components/ThumbnailList/ThumbnailList';

import './index.css';

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ ThumbnailList } />
      <Route path="about" component={ About } />
      <Route path="photos" component={ ThumbnailList } />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
