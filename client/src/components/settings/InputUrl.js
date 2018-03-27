import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchImages } from "../../actions/index";

class InputUrl extends Component {
    constructor(props) {
        super(props);
        this.state = { url: "" }
        this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log("event.target.value=", event.target.value)
        this.setState({ url: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log("EVENT in SUBMIT =>", event)
        this.props.callForProducts(this.state.url);
    }
    render() {
        return (
            <form className="input-group input-group-sm mb-5 col-9" onSubmit={ e => this.handleSubmit(e)} >
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">url</span>
                </div>
                <input 
                    type="text"
                    value={this.state.url}
                    onChange={ e => this.handleChange(e) }
                    className="form-control"
                    id="basic-url" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <input type="submit" className="btn" value="submit"/>
            </form>
        )
    }
} 

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        callForProducts: fetchImages
      },
      dispatch
    );
  }



export default connect(null, mapDispatchToProps)(InputUrl);