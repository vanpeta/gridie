import React, { Component } from "react";
import { connect } from "react-redux";

import Snippet from "./Snippet";

class CodeSnippet extends Component {

  snippet(data, numProds, title, CTA, category, enablePrice, enableName, hero) {
    console.log("DATA in snippet function======",data)
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
      heroData.link = data.selectedSite + data.products[0].link;
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
