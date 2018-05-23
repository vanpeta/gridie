import React, { Component } from "react";

import ShowPrice from "./ShowPrice";
import ShowName from "./ShowName";
import LinkToCategories from "./LinkToCategories";

class ProductSettings extends Component {

  render() {
    return (
        <div className="col-12 bg-light m-1 p-1">
                Product Settings
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <ShowName />
                        </div>
                        <div className="col-4">
                            <ShowPrice />
                        </div>
                        <div className="col-4">
                            <LinkToCategories />
                        </div>
                    </div>
                </div>
        </div>
    );
  }
}


export default ProductSettings;
