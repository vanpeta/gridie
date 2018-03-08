import React, { Component } from "react";
import { connect } from "react-redux";
import { selectCategory, newImagesAndLinks } from "../../actions/index";
import { bindActionCreators } from "redux";
import axios from "axios";


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
  handleProducts(response) {
    console.log(this.props);
    const products = response.data.Value.Abstract.Products;
    const imageUrls = [];
    const productUrls = [];
    for (let i = 0; i < 6; i++) {
      let imageUrl = products[i].ImageURLThumb;
      imageUrls.push(imageUrl.substring(0, imageUrl.indexOf("?")));
      let productUrl =
        "http://shop.guess.com/en/Catalog/View/" + products[i].ProductCode;
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
          {Object.keys(category)}
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
    selectCategory: selectCategory,
    newLinksAndImages: newImagesAndLinks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCategory: selectCategory,
    newLinksAndImages: newImagesAndLinks  
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
