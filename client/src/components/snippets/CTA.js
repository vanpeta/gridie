const CTA = (props, url) => {
	console.log("CTA COMPONENT url=", url);
	if (props === "") {
		return ""
	} else {
		return (
			`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td align="center" style="padding-top:40px; padding-bottom:40px;">
							<table align="center" width="60%" border="0" cellpadding="0" cellspacing="0">
								<tr>
									<td align="center" style="padding-top:10px; padding-bottom:10px; border: 1px solid #000000;">
										<a href="${url}" style="text-decoration: none; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%; text-transform: uppercase;">
											${props}
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>`
		);
	}
};

export default CTA;
