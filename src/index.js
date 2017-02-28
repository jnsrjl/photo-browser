import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import App from './App';
import About from './components/About/About';
import ThumbnailList from './components/ThumbnailList/ThumbnailList';
import PhotoView from './components/PhotoView/PhotoView';
import NoMatch from './components/NoMatch/NoMatch';

import './index.css';

render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRedirect to="/photos" />
      <Route path="about" component={ About } />
      <Route path="photos" component={ ThumbnailList } />
      <Route path="photos/:id" component={ PhotoView } />
      <Route path="*" component={ NoMatch } />
    </Route>
  </Router>
  ),
  document.getElementById('root')
);
