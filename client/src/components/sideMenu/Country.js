import React, { Component } from "react";
import Gender from "./Gender";

class Country extends Component {
  renderCountries() {
    return this.props.site.countries.map(country => {
      return <li key={this.props.site.countries.indexOf(country)}>
          {Object.keys(country)}
          <Gender country={country[Object.keys(country)]} />
        </li>;
    });
  }
  render() {
    return <ul>{this.renderCountries()}</ul>;
  }
}

export default Country;