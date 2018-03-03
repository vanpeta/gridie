import React, { Component } from "react";

class Codesnippet extends Component {
  render() {
		const snippet = `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">\n
		<tr>\n
				<td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n
						<a _label="product-grid" href="${this.props.links[0]}">\n
								<img width="194" src="${this.props.images[0]}" style="display:block; border-style: none;">\n
						</a>\n
				</td>\n
				<td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n
						<a _label="product-grid" href="${this.props.links[1]}">\n
								<img width="194" src="${this.props.images[1]}" style="display:block; border-style: none;">\n
						</a>\n
				</td>\n
				<td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n
						<a _label="product-grid" href="${this.props.links[2]}">\n
								<img width="194" src="${this.props.images[2]}" style="display:block; border-style: none;">\n
						</a>\n
				</td>\n
		</tr>\n
		<tr>\n
				<td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n
						<a _label="product-grid" href="${this.props.links[3]}">\n
								<img width="194" src="${this.props.images[3]}" style="display:block; border-style: none;">\n
						</a>\n
				</td>\n
				<td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n
						<a _label="product-grid" href="${this.props.links[4]}">\n
								<img width="194" src="${this.props.images[4]}" style="display:block; border-style: none;">\n
						</a>\n
				</td>\n
				<td align="center" width="33.3%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">\n
						<a _label="product-grid" href="${this.props.links[5]}">\n
								<img width="194" src="${this.props.images[5]}" style="display:block; border-style: none;">\n
						</a>\n
				</td>\n
		</tr>\n
</table>`
		return (
			<div>
				{ this.props.images }<br />
				{ this.props.links }<br />
				<div className="display-linebreak"> 
        { snippet } 
     </div>
			</div>
		)
	}
}

export default Codesnippet;
