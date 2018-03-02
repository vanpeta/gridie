import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Categories from "./Categories.js";
import Code from "./Code.js";

class App extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
				<div>
					<Route path="/" component={Categories} />
					<Route exact path="/" component={Code} />
				</div>
			</BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
