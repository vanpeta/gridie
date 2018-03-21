import React, { Component } from "react";
import { connect } from "react-redux";

import snippet from "../services/codeSnippets/sixImagesCS";

class CodeSnippet extends Component {
  render() {
		if (!this.props.newImagesAndLinks) {
			return <div>Select a url!</div>;
    }
		return (
			<div className="display-linebreak">
				{ snippet(this.props.newImagesAndLinks.data) } 
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		newImagesAndLinks: state.newImagesAndLinks
	};
}

export default connect(mapStateToProps)(CodeSnippet);
