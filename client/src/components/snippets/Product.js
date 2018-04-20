const Product = (props, priceStatus, nameStatus) => {
	let price = "";
	let name = "";
	if (priceStatus) {
		price = `
		<tr>
			<td align="center" style="padding-left:5%; padding-right:5%;">
				<a _label="product-grid" href="${props.link}" class="gridName" style="text-decoration: none; font-family: Futura, 'Trebuchet MS', Arial, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; font-weight: 100; line-height: 150%">
					${props.price}
				</a>
			</td>
		</tr>`;
	}
	if (nameStatus) {
		name = `
			<tr>
				<td align="center" style="padding-left:5%; padding-right:5%;">
					<a _label="product-grid" href="${props.link}" class="gridName" style="text-decoration: none; font-family: Futura, 'Trebuchet MS', Arial, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; font-weight: 100; line-height: 150%;">
						${props.name}
					</a>
				</td>
			<tr>`;
	}
  return (
      `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"> 
				<tr>
					<td align="center" width="100%" style="padding-top: 40px; padding-bottom:20px; padding-left:7px; padding-right:7px; font-family: Futura, 'Trebuchet MS', Arial, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; font-weight: 100; line-height: 150%;">
						<a _label="product-grid" href="${props.link}">
							<img width="180" class="imageMobile" src="${props.image}" style="display:block; border-style: none;">
						</a>
					</td>
				</tr>
				${name}
				${price}
			</table>`
  );
};

export default Product;