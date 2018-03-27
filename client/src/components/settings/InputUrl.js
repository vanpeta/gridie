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
        const url = this.state.url.split("?")[0]
        this.props.callForProducts(url);
    }

    renderError() {
        if (this.props.newImagesAndLinks) {
            console.log("RENDER ERROR PROPS=>", this.props.newImagesAndLinks)
            if (this.props.newImagesAndLinks.data === "Please provide a valid url") {
                console.log("PROPS IS STRING")
                return (
                    <div>Please provide a valid url</div>
                )
            }
        }
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
                    {this.renderError()}
            </form>
        )
    }
} 

function mapStateToProps (state) {
    return {
        newImagesAndLinks: state.newImagesAndLinks
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



export default connect(mapStateToProps, mapDispatchToProps)(InputUrl);