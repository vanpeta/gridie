import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
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
    console.log(products);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <label htmlFor="url">Category url</label>
        <input
          type="text"
          id="url"
          value={this.state.url}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button onClick={this.handleClick}>Get Gridie</button>
      </div>
    );
  }
}

export default App;