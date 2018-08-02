import React from 'react';
import { Router, Route } from 'dva/router';

import Login from '../routes/login/Login';
// import IndexPage from '../routes/IndexPage/IndexPage';
import NavigationPage from '../routes/navigation/IndexPage';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div style={{ height: '100%' }}>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/" component={IndexPage} /> */}
        <Route exact path="/nav" component={NavigationPage} />

      </div>

    </Router>
  );
}

export default RouterConfig;
