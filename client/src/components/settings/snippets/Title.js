import React from "react";

const Title = props => {
	console.log("TITLE COMPONENT PROPS=", props)
  return (
    <div>
      {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
					<tr>
							<td align="center" style="font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 40px; color: #000000; letter-spacing: .15em; line-height: 200%;">
									${props.title}
							</td>
					</tr>
			</table>`}
    </div>
  );
};

export default Title;