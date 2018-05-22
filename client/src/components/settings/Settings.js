import React, { Component } from "react";

import { connect } from "react-redux";

import InputUrl from "./InputUrl"
import InputTitle from "./InputTitle";
import InputParagraph from "./InputParagraph";
import InputCta from "./InputCta";
import InputNumberOrProducts from "./InputNumberOfProducts";
import ShowPrice from "./ShowPrice";
import ShowName from "./ShowName";
import ShowHero from "./ShowHero";

class Settings extends Component {
  renderSecondarySettings() {
    console.log("PROPS =>", this.props)
    if (this.props.numberOfProducts > 0 && this.props.category) {
      return (
        <div className="secondarySettings">
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
        </div>
      );
    } else {
      return ""
    }
  }
  render() {
    return <div className="container settings">
        <div className="row">
          <InputUrl />
        </div>
        <div className="row">
          <InputNumberOrProducts />
        </div>
        {this.renderSecondarySettings()}
      </div>;
  }
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.numberOfProducts,
    category: state.selectCategory
  };
}

export default connect(mapStateToProps)(Settings);
