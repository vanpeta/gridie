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
      <div className="col-9">
        <form
          className="input-group input-group-sm"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Show Name
            </span>
          </div>
          <input
            type="checkbox"
            checked={this.state.enable}
            onChange={e => this.handleChange(e)}
            className="form-control"
            id="basic-url"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
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
