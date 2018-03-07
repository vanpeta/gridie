import React, { Component } from "react";
import { connect } from "react-redux";
import Country from "./Country";

class SideMenu extends Component {
  renderCountries() {
    return this.props.sites.map(site => {
      return (
        <li key={this.props.sites.indexOf(site)}>
          <ul>
            { site.name }
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

function mapStateToProps(state) {
  return {
    sites: state.sites
  };
}

export default connect(mapStateToProps)(SideMenu);
