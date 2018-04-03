import React from "react";

const Product = props => {
  return (
    <div>
      {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"> 
				<tr>
					<td align="center" width="100%" style="padding-top: 20px; padding-bottom:20px; padding-left:5%; padding-right:5%; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">
						<a _label="product-grid" href="${props.data.link}">
							<img width="100%" src="${
                props.data.image
              }" style="display:block; border-style: none;">
						</a>
					</td>
				</tr>
				<tr>
					<td align="center" style="padding-left:5%; padding-right:5%; font-family: 'Century Gothic', Futura, Verdana, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; line-height: 200%; font-weight: bold;">${
						props.data.name
					}</td>
				</tr>
				<tr>
					<td align="center" style="font-family: 'Century Gothic', Futura, Verdana, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; line-height: 200%; font-weight: bold;">${
						props.data.price
					}</td>
				<tr>
			</table>`}
    </div>
  );
};

export default Product;