import React, { Component } from "react";
import { connect } from "react-redux";
import Sites from "./Sites";

class SitesContainer extends Component {
	renderSites() {
    return this.props.sites.map((site) =>{
      return <li key={this.props.sites.indexOf(site)}>
          <Sites site={site} />
        </li>;
    })
  }
  render() {

    return (
      <ul>{ this.renderSites() }</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    sites: state.sites
  };
}

export default connect(mapStateToProps)(SitesContainer);