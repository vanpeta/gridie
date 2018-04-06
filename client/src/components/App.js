import React, { Component } from "react";

import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./snippets/CodeSnippet";
import Settings from "./settings/Settings";

class App extends Component {

  render() {
    return (
      <div>
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">GRIDSTER</header>
        <div className="row">
          <div className="col-3">
            <SideMenu />
          </div>
          <div className="col-9">
            <Settings />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <CodeSnippet />
          </div>
        </div>
      </div>
    );
  }
}

export default App;