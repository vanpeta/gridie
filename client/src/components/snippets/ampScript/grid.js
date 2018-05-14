import Title from "../Title";
import Paragraph from "../Paragraph";
import CTA from "../CTA";

const ampScript = (props) => {
	console.log(props);
	const url = props.category + '?xml=1'
	const title = props.gridTitle.copy ? Title(props.gridTitle) : "";
	const paragraph = props.paragraph ? Paragraph(props.paragraph) : "";
	const topCTA = props.topCTA ? CTA(props.topCTA) : '';
	const bottomCTA = props.CTA ? CTA(props.CTA) : "";

	return `<!--[if !mso]><!-- -->
		<style type="text/css">
		@media only screen and (max-width: 480px) {
			.MobileCtaTextSize {
			font-size: 2.5vw !important;
			}
		}

		@media only screen and (max-width: 600px) {
			.hide_mobile {
			display: none !important;
			width: 0px !important;
			height: 0px !important;
			visibility: hidden !important;
			overflow: hidden !important;
			font-size: 0px !important;
			line-height: 0px !important;
			}
			.show_for_mobile {
			display: block !important;
			width: auto !important;
			height: auto !important;
			overflow: visible !important;
			position: static !important;
			min-height: 0px !important;
			line-height: normal !important;
			font-size: medium !important;
			}
		}
		</style>
		<!--<![endif]-->
		<!-- Grid -->
		<script runat="server" language="ampscript">
		var @GridUrl, @NewArrivalsUrl, @GridXML, @ProductCount, @Product, @rows, @Scene7, @ProductTitles, @ProductTitle, @ProductPrice, @ProductUrls, @ProductUrl, @fixedUrl, @ProductImageUrls, @ProductImageUrl, @NumberOfProducts, @TopCTA, @Paragraph, @BottomCTA, @Price, @ProductName
		
		SET @GridUrl = '${url}'
		SET @NumberOfProducts = ${props.numberOfProducts}
		SET @Price = '${props.enablePrice}'
		SET @ProductName = '${props.enableName}'

		SET @GridXML = HTTPGet(@GridUrl)
		SET @ProductTitles = BuildRowSetFromXML(@GridXML, "//ProductTitle")
		SET @ProductPrice = BuildRowSetFromXML(@GridXML, "//CurrentPrice")
		SET @ProductUrls = BuildRowSetFromXML(@GridXML, "//ProductUrl")
		SET @ProductImageUrls = BuildRowSetFromXML(@GridXML, "//ProductImageUrl")
		SET @ProductCount = RowCount(@ProductTitles)
		SET @Scene7 = "?wid=600&hei=807&fmt=pjpeg&pscan=auto&qlt=70,0&op_sharpen=1&resMode=bicub&op_usm=0.1,0.1,5,0&crop=0,136,1684,2261"
		set @NewArrivalsUrl = Substring(@GridUrl, 1, Subtract(Length(@GridUrl), 6))
		</script>
		${title}
		${paragraph}
		${topCTA}
		<script runat="server" language="ampscript">
		for @Product = 1 to @ProductCount do
			Set @ProductTitle = field(row(@ProductTitles, @Product), "Value")
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
			Set @ProductUrl = Field(Row(@ProductUrls, @ProductCount), "Value")
			Set @ProductImageUrl = Field(Row(@ProductImageUrls, @ProductCount), "Value")
			Set @fixedUrl = Replace(@ProductUrl, 'http', 'https')
			</script>
			<td align="center" width="200" style="padding-top: 10px; padding-bottom: 20px;">
			<table align="center" cellspacing="0" cellpadding="0" border="0">
				<tr>
				<td align="center">
					<a href="%%=RedirectTo(@fixedUrl)=%%">
					<img src="%%=RedirectTo(Concat(@ProductImageUrl,@Scene7))=%%" width="190" style="display: block;">
					</a>
				</td>
				</tr>
				<script runat="server" language="ampscript">
				IF @ProductName == 'TRUE' THEN
				</script>
				<tr>
				<td align="center" valign="top" height="30" style="padding-top: 5px; padding-right: 5%; padding-left: 5%; font-family: arial; font-size: 10px; letter-spacing: .10em;">
					%%=v(@ProductTitle)=%%
					<br>
				</td>
				</tr>
				<script runat="server" language="ampscript">
				ENDIF
				</script>
				<script runat="server" language="ampscript">
				IF @Price == 'TRUE' THEN
				</script>
				<tr>
				<td align="center" valign="top" height="30" style="padding-top: 5px; padding-right: 5%; padding-left: 5%; font-family: arial; font-size: 10px; letter-spacing: .10em;">
					%%=v(@ProductPrice)=%%
					<br>
				</td>
				</tr>
				<script runat="server" language="ampscript">
				ENDIF
				</script>
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
			for @ProductCount = 4 to @rows do
				Set @ProductTitle = Field(Row(@ProductTitles, @ProductCount), "Value")
			Set @ProductUrl = Field(Row(@ProductUrls, @ProductCount), "Value")
			Set @ProductImageUrl = Field(Row(@ProductImageUrls, @ProductCount), "Value")
			Set @fixedUrl = Replace(@ProductUrl, 'http', 'https')
			</script>
			<td align="center" width="200" style="padding-top: 10px; padding-bottom: 20px;">
			<table align="center" cellspacing="0" cellpadding="0" border="0">
				<tr>
				<td align="center">
					<a href="%%=RedirectTo(@fixedUrl)=%%">
					<img src="%%=RedirectTo(Concat(@ProductImageUrl,@Scene7))=%%" width="190" style="display: block;">
					</a>
				</td>
				</tr>
				<tr>
				<td align="center" valign="top" height="30" style="padding-top: 5px; padding-right: 5%; padding-left: 5%; font-family: arial; font-size: 10px; letter-spacing:
																																.10em;">
					%%=v(@ProductTitle)=%%
					<br>
				</td>
				</tr>
			</table>
			</td>
			<script runat="server" language="ampscript">
			NEXT @ProductCount
			</script>
			<script runat="server" language="ampscript">
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
				<tr>
					<td align="center" width="50%">
					<a href="%%=RedirectTo(@fixedUrl)=%%">
						<img src="%%=RedirectTo(Concat(@ProductImageUrl,@Scene7))=%%" width="95%" style="display: block;">
					</a>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" height="20" style="padding-top: 5px; padding-right: 5%; padding-left: 5%; font-family: arial; font-size: 10px; letter-spacing: .10em;">
					%%=v(@ProductTitle)=%%
					</td>
				</tr>
				</table>
			</td>
			<script runat="server" language="ampscript">
				NEXT @ProductCount
			</script>
			<script runat="server" language="ampscript">
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
				<tr>
					<td align="center" width="50%">
					<a href="%%=RedirectTo(@fixedUrl)=%%">
						<img src="%%=RedirectTo(Concat(@ProductImageUrl,@Scene7))=%%" width="95%" style="display: block;">
					</a>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" height="20" style="padding-top: 5px; padding-right: 5%; padding-left: 5%; font-family: arial; font-size: 10px; letter-spacing: .10em;">
					%%=v(@ProductTitle)=%%
					</td>
				</tr>
				</table>
			</td>
			<script runat="server" language="ampscript">
				NEXT @ProductCount
			</script>
			<script runat="server" language="ampscript">
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
				<tr>
					<td align="center" width="50%">
					<a href="%%=RedirectTo(@fixedUrl)=%%">
						<img src="%%=RedirectTo(Concat(@ProductImageUrl,@Scene7))=%%" width="95%" style="display: block;">
					</a>
					</td>
				</tr>
				<tr>
					<td align="center" valign="top" height="20" style="padding-top: 5px; padding-right: 5%; padding-left: 5%; font-family: arial; font-size: 10px; letter-spacing: .10em;">
					%%=v(@ProductTitle)=%%
					</td>
				</tr>
				</table>
			</td>
			<script runat="server" language="ampscript">
				NEXT @ProductCount
			</script>
			<script runat="server" language="ampscript">
				ENDIF
			</script>
			</tr>
		</table>
		</div>
		<!--<![endif]-->
		<!-- CTA -->
		${bottomCTA}`;
}

export default ampScript;