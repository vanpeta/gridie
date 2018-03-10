import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory, newImagesAndLinks } from "../../actions/index";
import { bindActionCreators } from "redux";
import axios from "axios";

let rootUrl = "";

class Category extends Component {
  handleClick(category) {
    this.props.selectCategory(category);
    const config = {
      method: "get",
      url: "api/get_products",
      params: category[Object.keys(category)] + "?json=1",
      responseType: "json",
      crossdomain: true,
      withCredentials: true
    };
    axios.request(config).then(response => this.handleProducts(response));
  }
  buildRootUrl() {
    if (this.props.activeBrand === "GUESS") {
      if (this.props.activeCountry === "US") {
        rootUrl = "https://shop.guess.com/en/";
      } else {
        rootUrl = "https://guess.ca/en/";
      }
    } else if (this.props.activeBrand === "G by GUESS") {
      if (this.props.activeCountry === "US") {
        rootUrl = "https://gbyguess.com/en/";
      } else {
        rootUrl = "https://gbyguess.ca/en/";
      }
    } else if (this.props.activeBrand === "GUESS Factory") {
      if (this.props.activeCountry === "US") {
        rootUrl = "https://guessfactory.com/en/";
      } else {
        rootUrl = "https://guessfactory.ca/en/";
      }
    } else if (this.props.activeBrand === "Marciano") {
      if (this.props.activeCountry === "US") {
        rootUrl = "https://guessbymarciano.guess.com/en/";
      } else {
        rootUrl = "https://guessbymarciano.guess.ca/en";
      }
    }
    return rootUrl;
  }
  handleProducts(response) {
    this.buildRootUrl();
    const products = response.data.Value.Abstract.Products;
    const imageUrls = [];
    const productUrls = [];
    for (let i = 0; i < 6; i++) {
      let imageUrl = products[i].ImageURLThumb;
      imageUrls.push(imageUrl.substring(0, imageUrl.indexOf("?")));
      let productUrl = rootUrl + "Catalog/View/" + products[i].ProductCode;
      productUrls.push(productUrl);
    }
    this.props.newLinksAndImages({ images: imageUrls, links: productUrls });
  }
  renderGenders() {
    return this.props.gender.map(category => {
      return (
        <li
          key={this.props.gender.indexOf(category)}
          onClick={() => this.handleClick(category)}
        >
          <p>{Object.keys(category)}</p>
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderGenders()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    activeGender: state.activeGender,
    activeCountry: state.activeCountry,
    activeBrand: state.activeBrand
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCategory: selectCategory,
    newLinksAndImages: newImagesAndLinks  
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
