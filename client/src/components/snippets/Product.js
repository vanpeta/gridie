const Product = (props, priceStatus, nameStatus) => {
	console.log(">>>>>>>>", priceStatus);
	console.log(">>>>>>>>", nameStatus);
	let price = "";
	let name = "";
	if (priceStatus) {
		price = `
		<tr>
			<td align="center" style="padding-left:5%; padding-right:5%;">
				<a _label="product-grid" href="${props.link}" class="gridName" style="text-decoration: none; font-family: 'Century Gothic', Futura, Verdana, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; line-height: 200%">
					${props.price}
				</a>
			</td>
		</tr>`;
	}
	if (nameStatus) {
		name = `
			<tr>
				<td align="center" style="padding-left:5%; padding-right:5%;">
					<a _label="product-grid" href="${props.link}" class="gridName" style="text-decoration: none; font-family: 'Century Gothic', Futura, Verdana, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; line-height: 200%;">
						${props.name}
					</a>
				</td>
			<tr>`;
	}
  return (
      `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"> 
				<tr>
					<td align="center" width="100%" style="padding-top: 20px; padding-bottom:20px; padding-left:5%; padding-right:5%; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">
						<a _label="product-grid" href="${props.link}">
							<img width="100%" src="${props.image}" style="display:block; border-style: none;">
						</a>
					</td>
				</tr>
				${name}
				${price}
			</table>`
  );
};

export default Product;