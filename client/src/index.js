import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { BrowserRouter,  Route } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers/';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

class Hello extends React.Component {
  render () { return <div>Hello</div>}
}
class GoodBye extends React.Component {
  render () { return <div>GoodBye</div>}
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
        <Route path="" component={Hello}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

