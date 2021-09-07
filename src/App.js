import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import CustomHook from './customHook';
import TestEffect from './useEffect';
import TestState from './useState';
import TestRedux from './redux';
import RouterHook from './router';
import configureStore from './redux/store/configureStore';


const App = (props) => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Redirect exact from='/' to='/CustomHook' />
        <Route path='/TestEffect' component={TestEffect} />
        <Route path='/TestState' component={TestState} />
        <Route path='/TestRedux' component={TestRedux} />
        <Route path='/CustomHook' component={CustomHook} />
        <Route path='/RouterHook' component={RouterHook} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
