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
					<div className="error">"{this.props.titleCopy}" might be too long</div>
				)
			}
		}

    render() {
        return (
            <div className="col-9">
				<form className="input-group input-group-sm" onSubmit={e => { e.preventDefault(); }}>
						<div className="input-group-prepend">
								<span className="input-group-text" id="inputGroup-sizing-sm">title copy</span>
						</div>
						<input 
								type="text"
								value={this.state.copy}
								onChange={ e => this.handleChange(e) }
								className="form-control"
								id="basic-url" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
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