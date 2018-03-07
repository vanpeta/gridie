import React, { Component } from "react";
import Category from "./Category"

class Gender extends Component {
  renderGenders() {
    return this.props.country.map(gender => {
      return (
        <li key={this.props.country.indexOf(gender)}>
          {Object.keys(gender)}
          <Category gender={gender[Object.keys(gender)]}/>
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderGenders()}</ul>;
  }
}

export default Gender;
