import React, { Component } from "react";
import { connect } from "react-redux";

import Snippet from "./Snippet";

class CodeSnippet extends Component {

  snippet(data, numProds, title, CTA, category, enablePrice, enableName, hero, paragraph, topCTA) {
    let heroData = { enable: hero };
    let newData = [];
    data.products.map((product, index) => {
      if (heroData.enable) {
        index = index + 1;
      }
      return (newData.push({
        image: product.image,
        link: data.selectedSite + product.link,
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
        numProds={numProds}
        title={title}
        hero={heroData}
        CTA={CTA}
        category={category}
        enablePrice={enablePrice}
        enableName={enableName}
        paragraph={paragraph}
        topCTA={topCTA}
        />
    );
  }
  render() {
    if (!this.props.newImagesAndLinks || !this.props.numberOfProducts) {
      return <div>Select a url!</div>;
    } else {
      return (
        <div>
          {this.snippet(
            this.props.newImagesAndLinks.data,
            this.props.numberOfProducts,
            this.props.gridTitle,
            this.props.CTA,
            this.props.category,
            this.props.enablePrice,
            this.props.enableName,
            this.props.hero,
            this.props.paragraph,
            this.props.topCTA
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
    paragraph: state.paragraphCopy,
    hero: state.isHeroEnable,
    CTA: state.CTACopy,
    topCTA: state.TopCTACopy,
    category: state.selectCategory,
    enablePrice: state.isPriceEnable,
    enableName: state.isNameEnable
  };
}



export default connect(mapStateToProps)(CodeSnippet);
;