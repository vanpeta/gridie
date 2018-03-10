import React, { Component } from "react";
import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./CodeSnippet";

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideMenu />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
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
        </div>
      </div>
    );
  }
}

export default App;