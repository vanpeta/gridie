import React, { Component } from "react";
import { connect } from "react-redux";
import Country from "./Country";
import { bindActionCreators } from "redux";
import { selectBrand } from "../../actions/index";
import "./css/sideMenuStyle.css";

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
          <p>
            { site.name }
          </p>
            <Country site={site} />
        </li>
      );
    });
  }
  render() {
    return (
      <nav>
        <ul>
          <li>
            <h5>Select Brand, Country, Gender and Category</h5>
          </li>
          {this.renderCountries()}
        </ul>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBrand: selectBrand
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    sites: state.sites,
    brand: state.activeBrand
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
