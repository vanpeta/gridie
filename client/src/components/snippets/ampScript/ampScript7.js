import productImage from "./ampScriptProductImage";

const ampScript6 = props => {
  return `<script runat="server" language="ampscript">
						for @Product = 1 to @ProductCount do
							Set @ProductTitle = field(row(@ProductTitles, @Product), "Value")
							Set @ProductPrice = field(row(@ProductPrices, @Product), "Value")
							Set @ProductUrl = field(row(@ProductUrls, @Product), "Value")
							Set @ProductImageUrl = field(row(@ProductImageUrls, @Product), "Value")
						next @Product
					</script>
					<!-- GRID desktop -->
						<table width="600" align="center" cellspacing="0" cellpadding="0" border="0" class="container hide_mobile">
							<tr>
							<script runat="server" language="ampscript">
								If RowCount(@ProductTitles) > 3 THEN
								SET @rows = 3
								ELSE
								SET @rows = RowCount(@ProductTitles)
								ENDIF
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
							</tr>
							<tr>
							<script runat="server" language="ampscript">
								If RowCount(@ProductTitles) > 5 THEN
								SET @rows = 5
								ELSE
								SET @rows = RowCount(@ProductTitles)
								ENDIF
								IF @rows >= 1 THEN
								for @ProductCount = 4 to @rows do
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
							</tr>
							<tr>
							<script runat="server" language="ampscript">
								If RowCount(@ProductTitles) > 7 THEN
								SET @rows = 7
								ELSE
								SET @rows = RowCount(@ProductTitles)
								ENDIF
								IF @rows >= 1 THEN
								for @ProductCount = 6 to @rows do
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
							</tr>
						</table>
					<!-- mobile -->
					<!--[if !mso]><!-- -->
						<div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
							<table width="100%" cellspacing="0" cellpadding="0" border="0" class="container">
							<tr>
								<script runat="server" language="ampscript">
									If RowCount(@ProductTitles) > 2 THEN
									SET @rows = 2
									ELSE
									SET @rows = RowCount(@ProductTitles)
									ENDIF
									IF @rows >= 1 THEN
									for @ProductCount = 1 to @rows do
									Set @ProductTitle = Field(Row(@ProductTitles, @ProductCount), "Value")
									Set @ProductUrl = Field(Row(@ProductUrls, @ProductCount), "Value")
									Set @ProductImageUrl = Field(Row(@ProductImageUrls, @ProductCount), "Value")
									Set @fixedUrl = Replace(@ProductUrl, 'http', 'https')
								</script>
								<td align="center" style="padding-top: 10px; padding-bottom: 20px;">
									<table align="center" cellspacing="0" cellpadding="0" border="0">
									${productImage(props)}
								</table>
							</td>
							<script runat="server" language="ampscript">
								NEXT @ProductCount
								ENDIF
							</script>
							</tr>
							<tr>
								<script runat="server" language="ampscript">
									If RowCount(@ProductTitles) > 4 THEN
									SET @rows = 4
									ELSE
									SET @rows = RowCount(@ProductTitles)
									ENDIF
									IF @rows >= 1 THEN
									for @ProductCount = 3 to @rows do
									Set @ProductTitle = Field(Row(@ProductTitles, @ProductCount), "Value")
									Set @ProductUrl = Field(Row(@ProductUrls, @ProductCount), "Value")
									Set @ProductImageUrl = Field(Row(@ProductImageUrls, @ProductCount), "Value")
									Set @fixedUrl = Replace(@ProductUrl, 'http', 'https')
								</script>
								<td align="center" style="padding-top: 10px; padding-bottom: 20px;">
									<table align="center" cellspacing="0" cellpadding="0" border="0">
									${productImage(props)}
								</table>
							</td>
							<script runat="server" language="ampscript">
								NEXT @ProductCount
								ENDIF
							</script>
							</tr>
							<tr>
								<script runat="server" language="ampscript">
									If RowCount(@ProductTitles) > 6 THEN
									SET @rows = 6
									ELSE
									SET @rows = RowCount(@ProductTitles)
									ENDIF
									IF @rows >= 1 THEN
									for @ProductCount = 5 to @rows do
									Set @ProductTitle = Field(Row(@ProductTitles, @ProductCount), "Value")
									Set @ProductUrl = Field(Row(@ProductUrls, @ProductCount), "Value")
									Set @ProductImageUrl = Field(Row(@ProductImageUrls, @ProductCount), "Value")
									Set @fixedUrl = Replace(@ProductUrl, 'http', 'https')
								</script>
								<td align="center" style="padding-top: 10px; padding-bottom: 20px;">
									<table align="center" cellspacing="0" cellpadding="0" border="0">
									${productImage(props)}
								</table>
							</td>
							<script runat="server" language="ampscript">
								NEXT @ProductCount
								ENDIF
							</script>
							</tr>
							</table>
						</div>
					<!--<![endif]-->
				`;
};

export default ampScript6;
