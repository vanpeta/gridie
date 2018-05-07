import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/sideMenuStyle.css";
import SideMenuItem from "./SideMenuItem";

class SideMenu extends Component {

  renderSites() {
    return this.props.sites.map((site, index) => {
      return (
        <div key={index}>
          <ul className="nav flex-column">
            <SideMenuItem 
              data={site} 
              address={[index]} 
            />
          </ul>
        </div>
      );
    });
  }
  render() {
    return <div className="menu" style={{backgroundColor: "#000000"}}>{this.renderSites()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    sites: state.sites,
  };
}

export default connect(mapStateToProps)(SideMenu);
