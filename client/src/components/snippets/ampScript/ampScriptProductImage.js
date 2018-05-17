const productImage = (props) => {
	let price = "";
  let name = "";
	if (props.enablePrice) {
    price = `
		<tr>
			<td align="center" style="padding-left:5%; padding-right:5%;">
				<a alias="product-grid" href="%%=RedirectTo(@fixedUrl)=%%" class="gridName" style="text-decoration: none; font-family: 'Futura pt', 'century gothic', Arial, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; font-weight: 100; line-height: 150%">
					%%=v(@ProductPrice)=%%
				</a>
			</td>
		</tr>`;
  }
	if (props.enableName) {
    name = `
			<tr>
				<td align="center" style="padding-left:5%; padding-right:5%;">
					<a alias="product-grid" href="%%=RedirectTo(@fixedUrl)=%%" class="gridName" style="text-decoration: none; font-family: 'Futura pt', 'century gothic', Arial, sans-serif; font-size: 13px; color: #000000; letter-spacing: .15em; font-weight: 100; line-height: 150%;">
						%%=v(@ProductTitle)=%%
					</a>
				</td>
			<tr>`;
  }
	return (
		`<tr>
			<td align="center" width="100%" style="padding-top: 40px; padding-bottom:20px; padding-left:3px; padding-right:3px; font-family: 'Futura pt', 'century gothic', Arial, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; font-weight: 100; line-height: 150%;">
				<a alias="product-grid" href="%%=RedirectTo(@fixedUrl)=%%">
					<img width="188" class="imageMobile" src="%%=RedirectTo(Concat(@ProductImageUrl,@Scene7))=%%" style="display:block; border-style: none;">
				</a>
			</td>
		</tr>
		${name}
		${price}`
	);
}

export default productImage;