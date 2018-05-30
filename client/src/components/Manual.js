import React, { Component } from "react";

import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./snippets/CodeSnippet";
import Settings from "./settings/Settings";
import Preview from "./Preview";
// eslint-disable-next-line
import EnableAmpScript from "./settings/EnableAmpScript";

class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <SideMenu />
          </div>
          <div className="col-6">
            <Settings mode="manual"/>
          </div>
          <div className="col-4 preview">
            {/* <EnableAmpScript /> */}
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