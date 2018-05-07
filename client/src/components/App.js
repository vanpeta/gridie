import React, { Component } from "react";

import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./snippets/CodeSnippet";
import Settings from "./settings/Settings";
import Preview from "./Preview";

class App extends Component {

  render() {
    return (
      <div className="container">
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
          GRIDSTER
        </header>
        <div className="row">
          <div className="col-2">
            <SideMenu />
          </div>
          <div className="col-6">
            <Settings />
          </div>
          <div className="col-4 preview">
            <Preview />
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