import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { numberOfProducts } from "../../actions/index";

class InputNumberOfProducts extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.numberOfProducts(e.target.value);
  }

  render() {
    return (
      <div className="col-9">
        <form className="input-group input-group-sm" onSubmit={e => { e.preventDefault(); }}>
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-sm"># of products</span>
					</div>
					<input
						className="form-control form-control-sm"
						id="productsInput"
						type="number"
						min="1"
						max="9"
						step="1"
						onChange={this.handleChange}
					/>
        </form>
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


export default connect(null, mapDispatchToProps)(InputNumberOfProducts);