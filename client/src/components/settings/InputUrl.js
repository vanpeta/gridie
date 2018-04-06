import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchImages, cleanUrl } from "../../actions/index";
import "./css/inputUrl.css";

class InputUrl extends Component {
    constructor(props) {
        super(props);
        this.state = { url: "" }
        this.handleChange.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ url: event.target.value }, () => {
            const url = this.state.url.split("?")[0];
            this.props.callForProducts(url);
        });
    }

    renderError() {
        if (this.props.newImagesAndLinks && this.props.newImagesAndLinks.response) {
            console.log("error=", this.props.newImagesAndLinks.response);
            if (this.props.newImagesAndLinks.response.status === 400) {
                return (
                    <div className="error">{this.props.newImagesAndLinks.response.data}</div>
                )
            }
        }
    }

    render() {
        
        return (
            <div className="col-9">
                <form className="input-group input-group-sm" onSubmit={e => { e.preventDefault(); }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">url</span>
                    </div>
                    <input 
                        type="text"
                        value={this.state.url}
                        onChange={ e => this.handleChange(e) }
                        className="form-control"
                        id="basic-url" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </form>
                <div className="row">
                    {this.renderError()}
                </div>
            </div>
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
        callForProducts: fetchImages,
        cleanUrl: cleanUrl
      },
      dispatch
    );
  }



export default connect(mapStateToProps, mapDispatchToProps)(InputUrl);