import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { nameEnable } from "../../actions/index";

class ShowName extends Component {
  constructor(props) {
    super(props);
    this.state = { enable: false };
    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ enable: !this.state.enable }, () => {
      this.props.updateNameSetting(this.state.enable);
    });
  }

  render() {
    return (
      <div className="col-12 bg-light m-1 p-1">
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
            id="name"
          />
          <label htmlFor="name" className="m-2 d-inline-block checkbox-text">
            Show Name
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
      updateNameSetting: nameEnable
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowName);
