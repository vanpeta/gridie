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
      <div className="col-12 bg-light m-1 p-1">
        <form className="p-1" onSubmit={e => { e.preventDefault(); }}>
					<input
            className="input"
            placeholder="# of products"
						id="productsInput"
						type="number"
						min="1"
						max="12"
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