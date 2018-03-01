import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Categories from "./Categories.js";
import Code from "./Code.js";

class App extends Component {
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

export default App;
