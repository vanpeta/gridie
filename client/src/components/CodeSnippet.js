import React, { Component } from "react";
import { connect } from "react-redux";

import snippet from "../services/codeSnippets/sixImagesCS";

class CodeSnippet extends Component {
  handleMouseOver(e) {
		console.log(e);
	}
  render() {
    if (!this.props.newImagesAndLinks) {
      return <div>Select a url!</div>;
    }
    return (
      <div className="display-linebreak" onMouseOver={this.handleMouseOver}>
        {snippet(this.props.newImagesAndLinks.data)}
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		newImagesAndLinks: state.newImagesAndLinks
	};
}

export default connect(mapStateToProps)(CodeSnippet);
