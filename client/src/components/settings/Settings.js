import React, { Component } from "react";

import InputUrl from "./InputUrl"
import InputTitle from "./InputTitle";
import InputCTA from "./InputCTA";
import InputNumberOrProducts from "./InputNumberOfProducts";
import ShowPrice from "./ShowPrice";
import ShowName from "./ShowName";

class Settings extends Component {
  render() {
    return <div className="container">
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
        <div className="row">
          <ShowPrice />
        </div>
        <div className="row">
          <ShowName />
        </div>
      </div>;
  }
}



export default Settings;
