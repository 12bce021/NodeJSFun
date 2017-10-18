import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndexPage from '../public/components/IndexPage';
import PageNotFound from '../public/components/PageNotFound';

const Routes = (
  <Router>
    <Route path='/' component={IndexPage} />
    <Route path="*" component={PageNotFound} />
  </Router>
);

export default Routes;