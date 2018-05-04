import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateTitleCopy } from "../../actions/index";

class InputTitle extends Component {
    constructor(props) {
        super(props);
        this.state = { title: { copy: "", biggerTitle: false }};
		this.handleCopy.bind(this);
		this.handleChange.bind(this);
    }

    handleCopy(event) {
		this.setState({ 
			title: { 
				copy: event.target.value,
				biggerTitle: this.state.title.biggerTitle
			}
		}, () => {
        	this.props.newGridTitleCopy(this.state.title);
      });
	}
	
	handleChange(event) {
		this.setState({
			title: {
				copy: this.state.title.copy,
				biggerTitle: !this.state.title.biggerTitle
			}
		}, () => {
			this.props.newGridTitleCopy(this.state.title);
		});
	}

    renderError() {
			if (this.props.title.copy.length > 19) {
				console.log("error=", this.props);
				return (
					<div className="error">"{this.state.tittle.copy}" might be too long *TIP: Use  '&lt;br /&gt;' to force a new line.</div>
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
						onChange={ e => this.handleCopy(e) }
						className="input"
						id="" />
					<input
						type="checkbox"
						checked={this.state.title.biggerTitle}
						onChange={e => this.handleChange(e)}
						className="d-inline-block m-2 checkbox"
						id="title"
					/>
					<label htmlFor="title" className="m-2 d-inline-block checkbox-text">
						Bigger Title
					</label>
				</form>					
				{this.renderError()}
            </div>
        )
    }
} 

function mapStateToProps (state) {
    return {
				newImagesAndLinks: state.newImagesAndLinks,
				title: state.title
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