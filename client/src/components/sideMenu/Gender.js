import React, { Component } from "react";
import Category from "./Category"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectGender } from "../../actions/index";


class Gender extends Component {
  handleClick(gender) {
    this.props.selectGender(Object.keys(gender)[0]);
  }
  renderGenders() {
    return this.props.country.map(gender => {
      return (
        <li 
          onClick={ () => this.handleClick(gender) }
          key={this.props.country.indexOf(gender)}>
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

function mapStateToProps (state) {
  return {
    activeGender: state.activeGender
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectGender: selectGender
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Gender);
