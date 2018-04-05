import React, { Component } from "react";
import { connect } from "react-redux";

import Snippet from "./snippets/Snippet";

class CodeSnippet extends Component {
  handleMouseOver(e) {
		console.log("MOUSEOVER in codeSnippet",e);
  }

  snippet(data, numProds, title) {
		console.log("snippet function", title);
		let newData = [];
		data.links.map( (link, index) => {
			return (
				newData[index] = { image: data.images[index], link: data.selectedSite + link, name: data.productName[index], price: data.price[index] }
			)
    });
    return (
      <Snippet data={newData} numProds={numProds} title={title}/>
    );
  }
	copyToDasboard(e) {
		e.preventDefault();
    console.log(e)
    document.execCommand(this.snippet(this.props.newImagesAndLinks.data, this.props.numberOfProducts, this.props.gridTitle));
    // e.clipboardData.setData('text/plain', this.snippet(this.props.newImagesAndLinks.data, this.props.numberOfProducts));
	}
  render() {
    if (!this.props.newImagesAndLinks || !this.props.numberOfProducts) {
      return (
				<div>
					Select a url!
				</div>
			);
    }
    return (
      <div 
        className="display-linebreak"
        // onMouseOver={this.handleMouseOver}
      >
        <button 
          type="button"
          className="btn btn-primary btn-sm float-right"
          onClick={(event) => this.copyToDasboard(event)}
        >
          copy
        </button>
        {this.snippet(this.props.newImagesAndLinks.data, this.props.numberOfProducts, this.props.gridTitle)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newImagesAndLinks: state.newImagesAndLinks,
    numberOfProducts: state.numberOfProducts,
    gridTitle: state.titleCopy
  };
}

export default connect(mapStateToProps)(CodeSnippet);
