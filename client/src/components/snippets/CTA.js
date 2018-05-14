const CTA = (props, url) => {
	if (props === "") {
		return ""
	} else {
		return (
			`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td align="center" style="padding-top: 30px; padding-bottom:10px;">
							<table align="center" width="50%" border="0" cellpadding="0" cellspacing="0">
								<tr>
									<td align="center" style="padding-top:10px; padding-bottom:10px; border: 2px solid #000000;">
										<a alias="bottomCTA" href="${url}" id="gridCTA" class="gridName" style="text-decoration: none; font-family: 'Futura pt', 'Century Gothic', arial, sans-serif; font-size: 18px; color: #000000; letter-spacing: .15em; line-height: 200%; text-transform: uppercase;">
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
