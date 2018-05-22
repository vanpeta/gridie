import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { enableCategory } from "../../actions/index";

class LinkToCategories extends Component {
  constructor(props) {
    super(props);
    this.state = { enable: false };
    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ enable: !this.state.enable }, () => {
      this.props.linkToCategory(this.state.enable);
    });
  }

  render() {
    return (
      <div className="bg-light m-1 p-1">
        <form
          className="p-1"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="checkbox"
            checked={this.state.enable}
            onChange={e => this.handleChange(e)}
            className="d-inline-block m-2 checkbox"
            id="enableCategory"
          />
          <label htmlFor="enableCategory" className="m-2 d-inline-block checkbox-text">
            Link to PLP
          </label>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nameSetting: state.isNameEnable
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
        linkToCategory: enableCategory
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkToCategories);
