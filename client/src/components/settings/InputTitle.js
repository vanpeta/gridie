import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateTitleCopy } from "../../actions/index";

class InputTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { copy: "" }
        this.handleChange.bind(this)
    }

    handleChange(event) {
			this.setState({ copy: event.target.value }, () => {
				this.props.newGridTitleCopy(this.state.copy);
			});
    }

    renderError() {
			if (this.props.titleCopy.length > 19) {
				console.log("error=", this.props);
				return (
					<div className="error">"{this.state.copy}" might be too long *TIP: Use  &lt;br /&gt; to force a new line.</div>
				)
			}
		}

    render() {
        return (
            <div className="col-9 bg-light m-1 p-1">
				<form className="p-1" onSubmit={e => { e.preventDefault(); }}>
					<input 
						type="text"
						value={this.state.copy}
						placeholder="title copy"
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
				newImagesAndLinks: state.newImagesAndLinks,
				titleCopy: state.titleCopy
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
				newGridTitleCopy: updateTitleCopy
      },
      dispatch
    );
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(InputTitle);