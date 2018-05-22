import React, { Component } from "react";

import InputUrl from "./InputUrl"
import InputTitle from "./InputTitle";
import InputParagraph from "./InputParagraph";
import InputCta from "./InputCta";
import InputNumberOrProducts from "./InputNumberOfProducts";
import ShowPrice from "./ShowPrice";
import ShowName from "./ShowName";
import ShowHero from "./ShowHero";

class Settings extends Component {
  render() {
    return <div className="container settings">
        <div className="row">
          <InputUrl />
        </div>
        <div className="row">
          <InputNumberOrProducts />
        </div>
        <div className="row">
          <ShowHero />
        </div>
        <div className="row">
          <InputTitle />
        </div>
        <div className="row">
          <InputParagraph />
        </div>
        <div className="row">
          <InputCta mode="top"/>
        </div>
        <div className="row">
          <InputCta  mode="bottom"/>
        </div>
        <div className="row">
          <ShowName />
        </div>
        <div className="row">
          <ShowPrice />
        </div>
      </div>;
  }
}



export default Settings;
