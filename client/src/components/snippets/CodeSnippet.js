import React, { Component } from "react";
import { connect } from "react-redux";

import Snippet from "./Snippet";

class CodeSnippet extends Component {

  snippet(data, numProds, title, CTA, category, enablePrice, enableName, hero) {
    let heroData = { enable: hero };
    if (heroData.enable) {
      heroData.link = data.selectedSite + data.links.shift();
      heroData.image = data.images.shift();
      console.log("!!!!!!!!!!!!!!!", heroData);
    }
    let newData = [];
    data.links.map((link, index) => {
      return (newData[index] = {
        image: data.images[index],
        link: data.selectedSite + link,
        name: data.productName[index],
        price: data.price[index]
      });
    });
    return (
      <Snippet
        data={newData}
        numProds={numProds}
        title={title}
        hero={heroData}
        CTA={CTA}
        category={category}
        enablePrice={enablePrice}
        enableName={enableName}
        />
    );
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
            this.props.gridTitle,
            this.props.CTA,
            this.props.category,
            this.props.enablePrice,
            this.props.enableName,
            this.props.hero
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
    gridTitle: state.titleCopy,
    hero: state.isHeroEnable,
    CTA: state.CTACopy,
    category: state.selectCategory,
    enablePrice: state.isPriceEnable,
    enableName: state.isNameEnable
  };
}

export default connect(mapStateToProps)(CodeSnippet);
