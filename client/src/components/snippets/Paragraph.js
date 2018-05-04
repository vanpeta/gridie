const Paragraph = props => {
  if (props === "") {
    return "";
  } else {
    return `<table align="center" width="75%" border="0" cellpadding="0" cellspacing="0">
					<tr>
							<td align="center" class="paragraph" style="padding-top:30px; padding-bottom:10px; font-family: 'Century Gothic', Futura, 'Trebuchet MS', Arial, sans-serif; font-size: 17px; color: #000000; letter-spacing: .15em;">
									${props}
							</td>
					</tr>
			</table>`;
  }
};

export default Paragraph;
