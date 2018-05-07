const Hero = props => {
  if (!props.enable) {
    return "";
  } else {
    return (
			`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td align="center" style="padding:10px; font-family: Futura, 'Trebuchet MS', Arial, sans-serif; font-size: 20px; color: #000000;">
							<a _label="hero" href="${props.link}">
								<img width="580" class="imageMobile" src="${props.image}" style="display:block; border-style: none;"/>
							</a>
						</td>
					</tr>
			</table>`
		);
  }
};

export default Hero;
