import React, { Component } from "react";
import { connect } from "react-redux";

import Snippet from "./Snippet";

class CodeSnippet extends Component {
  addLink(data, product) {
    if (!this.props.enableCategory) {
      return data.selectedSite + product.link
    } else {
      return this.props.category
    }
  }
  snippet(data, category, enablePrice, enableName, hero) {
    let heroData = { enable: hero };
    let newData = [];
    data.products.map((product, index) => {
      if (heroData.enable) {
        index = index + 1;
      }
      return (newData.push({
        image: product.image,
        link: this.addLink(data, product),
        name: product.productName,
        price: product.price
      }));
    });
    if (heroData.enable) {
      heroData.link = category;
      heroData.image = data.products[0].image;
      newData.shift();
    };
    return (
      <Snippet
        data={newData}
        hero={heroData}
        category={category}
        enablePrice={enablePrice}
        enableName={enableName}
        />
    );
  }
  render() {
    if (!this.props.newImagesAndLinks || !this.props.numberOfProducts) {
      return <div className="conductor">Select number of products and url</div>;
    } else {
      return (
        <div className="codeSnippet">
          {this.snippet(
            this.props.newImagesAndLinks.data,
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
    hero: state.isHeroEnable,
    category: state.selectCategory,
    enablePrice: state.isPriceEnable,
    enableName: state.isNameEnable,
    enableCategory: state.enableCategory
  };
}



export default connect(mapStateToProps)(CodeSnippet);
;