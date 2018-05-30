import React, { Component } from "react";

import { connect } from "react-redux";

class AllProducts extends Component {

    renderProducts() {
        const products = this.props.products.data.products;
        return (
            products.map((product, index) => {
                console.log("THIS IS PRODUCT!!!!!!", product)
                return (
                    <div className="imageContainer" key="index">
                        <img className="productImage" alt="productImage" src={product.image} />
                    </div>
                )
            })
        );
    }
    
    render() {
        return (
            <div className="container">
                {this.renderProducts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    products: state.newImagesAndLinks
  };
}

export default connect(mapStateToProps)(AllProducts);
