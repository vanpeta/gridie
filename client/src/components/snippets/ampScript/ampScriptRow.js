const row = (props) => {
	let code = 
	let numberOfRows; //1, 2, 3 o 4
	let imagesPerRow; //1, 2 o 3
	if (props.numberOfProducts%3 === 0) {
		imagesPerRow = 3
	}
	for (let i = 0; i < numberOfRows; i++) {

	}
	return 
		`<tr>
			<script runat="server" language="ampscript">
				SET @rows = ${props.numberOfProducts}
				IF @rows >= 1 THEN
				for @ProductCount = 1 to @rows do
				Set @ProductTitle = Field(Row(@ProductTitles, @ProductCount), "Value")
				SET @ProductPrice = field(row(@ProductPrices, @ProductCount), "Value")
				Set @ProductUrl = Field(Row(@ProductUrls, @ProductCount), "Value")
				Set @ProductImageUrl = Field(Row(@ProductImageUrls, @ProductCount), "Value")
				Set @fixedUrl = Replace(@ProductUrl, 'http', 'https')
			</script>
			<td align="center" width="200" style="padding-top: 10px; padding-bottom: 20px;">
				<table align="center" cellspacing="0" cellpadding="0" border="0">
					${productImage(props)}
				</table>
			</td>
			<script runat="server" language="ampscript">
				NEXT @ProductCount
				ENDIF
			</script>
		</tr>`;
}

export default row;