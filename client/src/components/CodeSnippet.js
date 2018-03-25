import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Snippet1,
  Snippet2,
  Snippet3,
  Snippet4,
  Snippet5,
  Snippet6,
  Snippet7,
  Snippet8,
  Snippet9
} from "../components/snippets/snippets";

class CodeSnippet extends Component {
  handleMouseOver(e) {
		console.log("MOUSEOVER in codeSnippet",e);
  }

  snippet(data, numProds) {
		console.log("snippet function", data);
		let newData = [];
		data.links.map( (link, index) => {
			return (
				newData[index] = { image: data.images[index], link: data.selectedSite + link }
			)
    });
		switch (numProds) {
      case "1":
        return Snippet1(newData);
      case "2":
        return Snippet2(newData);
      case "3":
        return Snippet3(newData);
      case "4":
        return Snippet4(newData);
      case "5":
        return Snippet5(newData);
      case "6":
        return Snippet6(newData);
      case "7":
        return Snippet7(newData);
      case "8":
        return Snippet8(newData);
      case "9":
      	return Snippet9(newData);
      default:
    }
}
	// copyToDasboard(e) {
	// 	e.preventDefault();
	// 	console.log(e)
  //   e.clipboardData.setData('text/plain', this.snippet(this.props.newImagesAndLinks.data, this.props.numberOfProducts));
	// }
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
				{/* <div className="btn float-right" onClick={(event) => this.copyToDasboard(event)}>
					button
				</div> */}
        {this.snippet(this.props.newImagesAndLinks.data, this.props.numberOfProducts)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newImagesAndLinks: state.newImagesAndLinks,
    numberOfProducts: state.numberOfProducts
  };
}

export default connect(mapStateToProps)(CodeSnippet);
