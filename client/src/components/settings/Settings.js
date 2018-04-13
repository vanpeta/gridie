import React, { Component } from "react";

import InputUrl from "./InputUrl"
import InputTitle from "./InputTitle";
import InputCTA from "./InputCTA";
import InputNumberOrProducts from "./InputNumberOfProducts";

class Settings extends Component {
  render() {
    return (
      <div className="container">
				<div className="row">
					<InputNumberOrProducts />
				</div>
				<div className="row">
					<InputUrl />
				</div>
				<div className="row">
					<InputTitle />
				</div>
				<div className="row">
					<InputCTA />
				</div>
      </div>
    );
  }
}



export default Settings;
