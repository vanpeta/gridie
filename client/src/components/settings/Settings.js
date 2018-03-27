import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { numberOfProducts } from "../../actions/index";
import InputUrl from "./InputUrl"

class Settings extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.props.numberOfProducts(e.target.value)
	}
  render() {
    return (
      <div className="container">
				<div className="row">
					<div className="form-group col-3">
						<label htmlFor="productsInput">
							Number of products:
						</label>
						<select 
							className="form-control form-control-sm"
							id="productsInput"
							type="number"
							min="1"
							max="9"
							step="1"
							onChange={this.handleChange}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
						</select>
					</div>
						<InputUrl />
				</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      numberOfProducts
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Settings);
