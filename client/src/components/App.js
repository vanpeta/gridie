import React, { Component } from "react";

import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./snippets/CodeSnippet";
import Settings from "./settings/Settings";
import Preview from "./Preview";
import EnableAmpScript from "./settings/EnableAmpScript";

class App extends Component {

  render() {
    console.log("Created by Carlos Allende for GUESS inc.");
    console.log("Open Source project, fork the repo: https://github.com/vanpeta/gridie.git");
    console.log("contact: callende@guess.com");
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
            <EnableAmpScript />
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