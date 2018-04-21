const Paragraph = props => {
  if (props === "") {
    return "";
  } else {
    return `<table align="center" width="75%" border="0" cellpadding="0" cellspacing="0">
					<tr>
							<td align="center" class="paragraph" style="padding-top:30px; padding-bottom:30px; font-family: Futura, 'Trebuchet MS', Arial, sans-serif; font-size: 15px; color: #000000; letter-spacing: .15em; line-height: 200%;">
									${props}
							</td>
					</tr>
			</table>`;
  }
};

export default Paragraph;
