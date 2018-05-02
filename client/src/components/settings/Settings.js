import React, { Component } from "react";

import InputUrl from "./InputUrl"
import InputTitle from "./InputTitle";
import InputParagraph from "./InputParagraph";
import InputCTA from "./InputCTA";
import InputTopCTA from "./InputTopCTA";
import InputNumberOrProducts from "./InputNumberOfProducts";
import ShowPrice from "./ShowPrice";
import ShowName from "./ShowName";
import ShowHero from "./ShowHero";

class Settings extends Component {
  render() {
    return <div className="container">
        <div className="row">
          <ShowHero />
        </div>
        <div className="row">
          <ShowPrice />
        </div>
        <div className="row">
          <ShowName />
        </div>
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
          <InputTopCTA />
        </div>
        <div className="row">
          <InputCTA />
        </div>
        <div className="row">
          <InputParagraph />
        </div>
      </div>;
  }
}



export default Settings;
