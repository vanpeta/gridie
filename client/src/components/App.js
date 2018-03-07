import React, { Component } from "react";
import SideMenu from "./sideMenu/SideMenu";
import CodeSnippet from "./CodeSnippet";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      images: [],
      links: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  onInputChange(term) {
    this.setState({ url: term });
  }

  handleClick() {
    const config = {
      method: "get",
      url: 'api/get_products',
      params: this.state.url + "?json=1",
      responseType: "json",
      crossdomain: true,
      withCredentials: true
    };
    axios.request(config).then(response => this.handleProducts(response));
  }

  handleProducts(response) {
    const products = response.data.Value.Abstract.Products;
    const imageUrls = [];
    const productUrls = [];
    for (let i = 0; i < 6; i++) {
      let imageUrl = products[i].ImageURLThumb;
      imageUrls.push(imageUrl.substring(0, imageUrl.indexOf("?")));
      let productUrl = "http://shop.guess.com/en/Catalog/View/" + products[i].ProductCode;
      productUrls.push(productUrl);
    }
    this.setState({ images: imageUrls, links: productUrls });
  }
  renderCode() {
    return (
      <div>
        <CodeSnippet
          images = { this.state.images }
          links = { this.state.links }
        />
      </div>
    )
  }

  render() {
    return <div className="App">
        <SideMenu />
        <label htmlFor="url">Category url</label>
        <input type="text" id="url" value={this.state.url} onChange={event => this.onInputChange(event.target.value)} />
        <button onClick={this.handleClick}>Get Gridie</button>
        <pre>
          <code>
            <div>{this.renderCode()}</div>
          </code>
        </pre>
      </div>;
  }
}

export default App;