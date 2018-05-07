import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateTopCTACopy } from "../../actions/index";

class InputTopCTA extends Component {
    constructor(props) {
        super(props);
        this.state = { copy: "" }
        this.handleChange.bind(this)
    }

    handleChange(event) {
			this.setState({ copy: event.target.value }, () => {
				this.props.newGridTopCTACopy(this.state.copy);
			});
    }

    renderError() {
			if (this.props.TopCTACopy.length > 15) {
				console.log("error=", this.props);
				return (
					<div className="error">"{this.state.copy}" might be too long</div>
				)
			}
		}

    render() {
        return (
            <div className="col-12 bg-light m-1 p-1">
				<form className="p-1" onSubmit={e => { e.preventDefault(); }}>
					<input 
						type="text"
						value={this.state.copy}
						placeholder="Top CTA copy"
						onChange={ e => this.handleChange(e) }
						className="input"
						id="" />
				</form>
				{this.renderError()}
            </div>
        )
    }
} 

function mapStateToProps (state) {
    return {
			TopCTACopy: state.TopCTACopy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
				newGridTopCTACopy: updateTopCTACopy
      },
      dispatch
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(InputTopCTA);