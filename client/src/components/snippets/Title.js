const Title = props => {
	console.log("props in TITLE======", props);
	let size = "40"
	if (!props.copy) {
		return ""
	} else {
		if (props.biggerTitle) {
			size = "50"
		}
		return (
			`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td align="center" class="gridTitle" style="padding-top:40px; padding-bottom:10px; font-family: 'Century Gothic', Futura, 'Trebuchet MS', Arial, sans-serif; font-size:`+ size +`px; color: #000000; letter-spacing: .15em; font-weight: 100; text-transform: uppercase;">
								${props.copy}
						</td>
					</tr>
			</table>`
		)
	}
};

export default Title;