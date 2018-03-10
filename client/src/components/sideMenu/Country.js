import React, { Component } from "react";
import Gender from "./Gender";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectCountry } from "../../actions/index";

class Country extends Component {
  handleClick (country) {
    this.props.selectCountry(Object.keys(country)[0]);
  }
  renderCountries() {
    return this.props.site.countries.map(country => {
      return (
        <li
          onClick={ () => this.handleClick(country) } 
          key={this.props.site.countries.indexOf(country)}>
          <p>{Object.keys(country)}</p>
          <Gender country={country[Object.keys(country)]} />
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderCountries()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    activeCountry: state.activeCountry
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCountry: selectCountry
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);