import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCTACopy } from "../../actions/index";

class InputCTA extends Component {
    constructor(props) {
        super(props);
        this.state = { copy: "" }
        this.handleChange.bind(this)
    }

    handleChange(event) {
			this.setState({ copy: event.target.value }, () => {
				this.props.newGridCTACopy(this.state.copy);
			});
    }

    renderError() {
			if (this.props.CTACopy.length > 15) {
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
							placeholder="Bottom CTA copy"
							value={this.state.copy}
							onChange={ e => this.handleChange(e) }
							className="input"
							id="" aria-label="" aria-describedby="" />
				</form>
				{this.renderError()}
            </div>
        )
    }
} 

function mapStateToProps (state) {
    return {
			CTACopy: state.CTACopy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
				newGridCTACopy: updateCTACopy
      },
      dispatch
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(InputCTA);