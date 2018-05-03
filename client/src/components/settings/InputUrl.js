import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchImages, cleanUrl } from "../../actions/index";
import "./css/inputUrl.css";

class InputUrl extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            url: "",
            selectedCategory : ""
        }
        this.handleChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.selectedCategory !== this.state.selectedCategory) {
            this.setState({ selectedCategory: nextProps.selectedCategory });
        }
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
        // console.log("!!!!!!!!!!!!!!!!!!!!!", this.state.selectedCategory);
        const selectedCategory = this.state.selectedCategory;
        return (
            <div className="col-9 bg-light m-1 p-2">
                <form className="p-1" onSubmit={e => { e.preventDefault(); }}>
                    <input 
                        type="text"
                        value={this.state.url}
                        placeholder={ selectedCategory ? selectedCategory : "url"}
                        onChange={ e => this.handleChange(e) }
                        className="input"
                        id="" />
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
        newImagesAndLinks: state.newImagesAndLinks,
        selectedCategory: state.selectCategory
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