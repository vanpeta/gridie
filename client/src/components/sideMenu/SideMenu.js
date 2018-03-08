import React, { Component } from "react";
import { connect } from "react-redux";
import Country from "./Country";
import { bindActionCreators } from "redux";
import { selectBrand } from "../../actions/index";

class SideMenu extends Component {
  handleClick(brand) {
    this.props.selectBrand(brand);
  }
  renderCountries() {
    return this.props.sites.map(site => {
      return (
        <li
          onClick={ () => this.handleClick(site.name) } 
          key={this.props.sites.indexOf(site)}>
          { site.name }
          <ul>
            <Country site={site} />
          </ul>
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderCountries()}</ul>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBrand: selectBrand
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    sites: state.sites
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
