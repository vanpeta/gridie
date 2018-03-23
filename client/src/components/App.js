import React, { Component } from "react";

import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./CodeSnippet";
import Settings from "./Settings";

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <SideMenu />
          </div>
          <div className="col-9">
            <Settings />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <pre>
              <code>
                <div>
                  <CodeSnippet />
                </div>
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;