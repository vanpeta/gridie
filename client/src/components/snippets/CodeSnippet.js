import React, { Component } from "react";
import { connect } from "react-redux";

import Snippet from "./Snippet";

class CodeSnippet extends Component {

  snippet(data, numProds, title) {
    console.log("snippet function", title);
    let newData = [];
    data.links.map((link, index) => {
      return (newData[index] = {
        image: data.images[index],
        link: data.selectedSite + link,
        name: data.productName[index],
        price: data.price[index]
      });
    });
    return <Snippet data={newData} numProds={numProds} title={title} />;
  }



  render() {
    if (!this.props.newImagesAndLinks || !this.props.numberOfProducts) {
      return <div>Select a url!</div>;
    } else {
      return (
        <div>
          <div>
            
          </div>
          {this.snippet(
            this.props.newImagesAndLinks.data,
            this.props.numberOfProducts,
            this.props.gridTitle
          )}
        </div>
      );
    }
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
