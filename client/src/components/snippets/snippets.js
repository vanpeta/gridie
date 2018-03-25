import React from "react";

export const Product = (props) => {
	return (
		<div>
			{`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0"> 
				<tr>
					<td align="center" width="100%" style="padding-top: 20px; padding-bottom:20px; font-family: CenturyGothic, Futura, Verdana, sans-serif; font-size: 20px; color: #000000; letter-spacing: .15em; line-height: 200%;">
						<a _label="product-grid" href="${props.data.link}">
							<img width="194" src="${props.data.image}" style="display:block; border-style: none;">
						</a>
					</td>
				</tr>
			</table>`}
		</div>
	)
};


export const Snippet1 = (props) => {

	return <div>
      <Product data={props} />
    </div>;
};

export const Snippet2 = (props) => {
         return (
				 	<div>
           {`<table width="582" align="center" cellspacing="0" cellpadding="0">
							<tr>
								<td width="50%" align="center">`}
             			<Product data={props[0]} />
             {`</td>
								<td width="50%" align="center">`}
             			<Product data={props[1]} />
             {`</td>
							</tr>
						</table>`}
					 </div>
				 );
       };

export const Snippet3 = (props) => {
	return <div>
      {`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      <Product data={props[0]} />
      {`</td>
					<td align="center" width="33.3%">`}
      <Product data={props[1]} />
      {`</td>
					<td align="center" width="33.3%">`}
      <Product data={props[2]} />
      {`</td>
				</tr>
			</table>`}
    </div>;
};

export const Snippet4 = (props) => {
	return <div>
      {`<table width="582" align="center" cellspacing="0" cellpadding="0">
					<tr>
						<td width="50%" align="center">`}
      <Product data={props[0]} />
      {`</td>
						<td width="50%" align="center">`}
      <Product data={props[1]} />
      {`</td>
				</tr>
			</table>
    	<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
  			    <Product data={props[2]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={props[3]} />
      	{`</td>
				</tr>
			</table>`}
    </div>;
};

export const Snippet5 = (props) => {
	return <div>
      {`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      <Product data={props[0]} />
      {`</td>
					<td align="center" width="33.3%">`}
      <Product data={props[1]} />
      {`</td>
					<td align="center" width="33.3%">`}
      <Product data={props[2]} />
      {`</td>
				</tr>
			</table>
			<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
      <Product data={props[3]} />
      {`</td>
					<td width="50%" align="center">`}
      <Product data={props[4]} />
      {`</td>
				</tr>
			</table>`}
    </div>;
};

export const Snippet6 = (props) => {
	return (
		<div>
		{`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={props[0]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[1]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[2]} />
					{`</td>
				</tr>
			</table>
			<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={props[4]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[5]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[6]} />
					{`</td>
				</tr>
			</table>`}
		</div>
	)
};

export const Snippet7 = (props) => {
	return (
		<div>
			{`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={props[0]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[1]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[2]} />
					{`</td>
				</tr>
			</table>
			<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
						<Product data={props[3]} />
				{`</td>
					<td width="50%" align="center">`}
						<Product data={props[4]} />
				{`</td>
				</tr>
			</table>
			<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
						<Product data={props[5]} />
				{`</td>
					<td width="50%" align="center">`}
						<Product data={props[6]} />
				{`</td>
				</tr>
			</table>`}
		</div>
	)
};

export const Snippet8 = (props) => {
	console.log("SNIPPE82=", props);
	return (
		<div>
			{`<table width="582" align="center" cellspacing="0" cellpadding="0">
					<tr>
						<td width="50%" align="center">`}
      <Product data={props[0]} />
      {`</td>
						<td width="50%" align="center">`}
      <Product data={props[1]} />
      {`</td>
				</tr>
			</table>
    	<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
  			    <Product data={props[2]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={props[3]} />
      	{`</td>
				</tr>
			</table>
			<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
      			<Product data={props[4]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={props[5]} />
      	{`</td>
				</tr>
			</table>
    	<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
  			    <Product data={props[6]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={props[7]} />
      	{`</td>
				</tr>
			</table>`}
		</div>
	)
};

export const Snippet9 = (props) => {
	return (
		<div>
			{`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={props[0]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[1]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[2]} />
					{`</td>
				</tr>
			</table>
			<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={props[3]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[4]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[5]} />
					{`</td>
				</tr>
			</table>
			<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={props[6]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[7]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={props[8]} />
					{`</td>
				</tr>
			</table>`}
		</div>
	)
};