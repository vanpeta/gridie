import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { priceEnable } from "../../actions/index";

class ShowPrice extends Component {
  constructor(props) {
		super(props);
		this.state ={ enable: false };
    this.handleChange.bind(this);
  }

  handleChange(event) {
		this.setState(
			{ enable: !this.state.enable },
			() => {
				this.props.updatePriceSetting(this.state.enable);
			}
		);
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
              Show Price
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
    priceSetting: state.isPriceEnable,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updatePriceSetting: priceEnable
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPrice);