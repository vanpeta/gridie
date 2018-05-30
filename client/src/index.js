import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { BrowserRouter,  Route, Switch, Link } from 'react-router-dom';

import Manual from './components/Manual';
import Auto from './components/Auto';
import reducers from './reducers/';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-6 text-center">
          <Link className="btn btn-primary" to="/manual">manual</Link>
        </div>
        <div className="col-6 text-center">
          <Link className="btn btn-primary" to="/auto">auto</Link>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container">
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <Link to="/">GRIDSTER</Link>
        </header>
        <Switch>
          <Route path="/auto" component={Auto}/>
          <Route path="/manual" component={Manual}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);