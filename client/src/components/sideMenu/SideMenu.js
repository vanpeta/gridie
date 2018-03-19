import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectSite } from "../../actions/index";
import "./css/sideMenuStyle.css";
import SideMenuItem from "./SideMenuItem";

class SideMenu extends Component {

  renderSites() {
    return this.props.sites.map((site, index) => {
      return <div key={index}>
          {/* <div onClick={() => this.props.selectSite(site)}>{site.title}</div> */}
          <ul>
            <SideMenuItem 
              data={site} 
              address={[index]} 
            />
          </ul>
        </div>;
    });
  }
  render() {
    console.log('this.props =', this.props)
    return <div>{this.renderSites()}</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectSite
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    sites: state.sites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
