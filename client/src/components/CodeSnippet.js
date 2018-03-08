import React, { Component } from "react";
import { connect } from "react-redux";

class CodeSnippet extends Component {
  render() {
		if (!this.props.newImagesAndLinks) {
      return <div>Select a url!</div>;
    }
		const snippet = `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">\n <tr>\n  <td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n   <a _label="product-grid" href="${this.props.newImagesAndLinks.links[0]}">\n    <img width="194" src="${this.props.newImagesAndLinks.images[0]}" style="display:block; border-style: none;">\n   </a>\n  </td>\n  <td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n   <a _label="product-grid" href="${this.props.newImagesAndLinks.links[1]}">\n    <img width="194" src="${this.props.newImagesAndLinks.images[1]}" style="display:block; border-style: none;">\n   </a>\n  </td>\n  <td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n   <a _label="product-grid" href="${this.props.newImagesAndLinks.links[2]}">\n    <img width="194" src="${this.props.newImagesAndLinks.images[2]}" style="display:block; border-style: none;">\n   </a>\n  </td>\n </tr>\n <tr>\n  <td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n   <a _label="product-grid" href="${this.props.newImagesAndLinks.links[3]}">\n    <img width="194" src="${this.props.newImagesAndLinks.images[3]}" style="display:block; border-style: none;">\n   </a>\n  </td>\n  <td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n   <a _label="product-grid" href="${this.props.newImagesAndLinks.links[4]}">\n    <img width="194" src="${this.props.newImagesAndLinks.images[4]}" style="display:block; border-style: none;">\n   </a>\n  </td>\n  <td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n   <a _label="product-grid" href="${this.props.newImagesAndLinks.links[5]}">\n    <img width="194" src="${this.props.newImagesAndLinks.images[5]}" style="display:block; border-style: none;">\n   </a>\n  </td>\n </tr>\n</table>`
		return (
		<div className="display-linebreak"> 
      { snippet } 
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		newImagesAndLinks: state.newLinksAndImages
	};
}

export default connect(mapStateToProps)(CodeSnippet);
