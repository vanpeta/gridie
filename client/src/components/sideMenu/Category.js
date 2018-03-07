import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../actions/index";
import { bindActionCreators } from "redux";

class Category extends Component {
  renderGenders() {
    return this.props.gender.map(category => {
      return (
        <li 
          key={this.props.gender.indexOf(category)}
          onClick={() => this.props.selectCategory(category)}
          >
          {Object.keys(category)}
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderGenders()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    selectedCategory: selectCategory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
