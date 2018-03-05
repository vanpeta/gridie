import React, { Component } from "react";

class Sites extends Component {
  render() {
    return <div>{ this.props.site.name }</div>;
  }
}

export default Sites;
