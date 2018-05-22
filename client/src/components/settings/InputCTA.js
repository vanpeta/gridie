import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateTopCTACopy, updateBottomCTA } from "../../actions/index";

class InputTopCTA extends Component {
    constructor(props) {
        super(props);
        this.state = { copy: "", paddingTop: 30, paddingBottom: 10 }
        this.handleChange.bind(this)
	}
	
	updateAppState(newState) {
		if (this.props.mode === "top") {
			this.props.newTopCta(newState);
		} else {
			this.props.newBottomCta(newState);
		}
	}

    handleChange(event, property) {
		switch (property) {
		case "copy":
			return (
				this.setState({ copy: event.target.value }, () => {
					this.updateAppState(this.state);
				})
			);
		case "paddingTop":
			return (
				this.setState({ paddingTop: event.target.value }, () => {
					this.updateAppState(this.state);
				})
			);
		case "paddingBottom":
			return (
				this.setState({ paddingBottom: event.target.value }, () => {
					this.updateAppState(this.state);
				})
			);
		default:
		}
    }

    renderError() {
		if (this.state.copy.length > 15) {
			console.log("error=", this.props);
			return (
				<div className="error">"{this.state.copy}" might be too long</div>
			)
		}
	}
	paddingControls() {
		if (this.state.copy) {
			return (
				<div>
					<div className="inputCTA">
						<label htmlFor="paddingTop">top</label>
						<input
							type="number"
							value={this.state.paddingTop}
							min="0"
							placeholder="add space"
							onChange={e => this.handleChange(e, "paddingTop")}
							className="input"
							id="paddingTop" />
					</div>
					<div className="inputCTA">
						<label htmlFor="paddingBottom">bottom</label>
						<input
							type="number"
							value={this.state.paddingBottom}
							min="0"
							placeholder="add space"
							onChange={e => this.handleChange(e, "paddingBottom")}
							className="input"
							id="paddingBottom" />
					</div>
				</div>
			);
		}
	}
	placeholder() {
		if (this.props.mode === "top") {
			return "Top CTA"
		} else {
			return "Bottom CTA"
		}
	}

    render() {
		const placeholder = this.placeholder()
        return (
            <div className="col-12 bg-light m-1 p-1">
				<form className="p-1" onSubmit={e => { e.preventDefault(); }}>
					<input 
						type="text"
						value={this.state.copy}
						placeholder={ placeholder }
						onChange={ e => this.handleChange(e, "copy") }
						className="input"
						id="" />
					{this.paddingControls()}
				</form>
				{this.renderError()}
            </div>
        )
    }
} 

function mapStateToProps (state) {
    return {
		topCta: state.topCta,
		bottomCta: state.bottomCta
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    	{
			newTopCta: updateTopCTACopy,
			newBottomCta: updateBottomCTA
    	},
    	dispatch
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(InputTopCTA);