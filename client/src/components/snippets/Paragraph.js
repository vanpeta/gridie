const Paragraph = props => {
  if (props === "") {
    return "";
  } else {
    return `<table align="center" width="75%" border="0" cellpadding="0" cellspacing="0">
					<tr>
							<td align="center" class="paragraph" style="padding-top:20px; font-family: 'futura pt', 'Century Gothic', Arial, sans-serif; font-size: 18px; color: #000000; letter-spacing: .15em; line-height: 200%;">
									${props}
							</td>
					</tr>
			</table>`;
  }
};

export default Paragraph;
