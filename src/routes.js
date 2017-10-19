'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import IndexPage from './components/IndexPage';
import PageNotFound from './components/PageNotFound';

const routes = (
  <Route path="/">
    <IndexRoute component={IndexPage}/>
    <Route path="*" component={PageNotFound}/>
  </Route>
);

export default routes;
