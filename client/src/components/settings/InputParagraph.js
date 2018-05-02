import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateParagraphCopy } from "../../actions/index";

class InputParagraph extends Component {
    constructor(props) {
        super(props);
        this.state = { copy: "" }
        this.handleChange.bind(this)
    }

    handleChange(event) {
			this.setState({ copy: event.target.value }, () => {
				this.props.newParagraphCopy(this.state.copy);
			});
    }

    renderError() {
			if (this.props.paragraphCopy.length > 19) {
				console.log("error=", this.props);
				return (
					<div className="error">"{this.props.paragraphCopy}" might be too long *TIP: Use  &lt;br /&gt; to force a new line.</div>
				)
			}
		}

    render() {
        return (
            <div className="col-9 bg-light m-1 p-1">
				<form className="" onSubmit={e => { e.preventDefault(); }}>
					<textarea 
						type="text"
						value={this.state.copy}
						placeholder="paragraph"
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
				paragraphCopy: state.paragraphCopy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
		newParagraphCopy: updateParagraphCopy
      },
      dispatch
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(InputParagraph);