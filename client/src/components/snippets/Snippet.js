import React, { Component } from "react";
import Product from "./Product";


class Snippet extends Component {
  render () {
    console.log("PROPS in snippet", this.props)
  switch (this.props.numProds) {
    case "1":
      return (
        <div>
          <Product data={this.props.data[0]} />
        </div>
      );
    case "2":
      return (
        <div>
          {`<table width="582" align="center" cellspacing="0" cellpadding="0">
						<tr>
							<td width="50%" align="center">`}
          <Product data={this.props.data[0]} />
          {`</td>
							<td width="50%" align="center">`}
          <Product data={this.props.data[1]} />
          {`</td>
						</tr>
					</table>`}
        </div>
      );
    case "3":
      return (
        <div>
        {`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[0]} />
            {`</td>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[1]} />
            {`</td>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[2]} />
            {`</td>
            </tr>
          </table>`}
        </div>
      );
    case "4":
      return (
        <div>
        {`<table width="582" align="center" cellspacing="0" cellpadding="0">
            <tr>
              <td width="50%" align="center">`}
                <Product data={this.props.data[0]} />
            {`</td>
              <td width="50%" align="center">`}
                <Product data={this.props.data[1]} />
            {`</td>
            </tr>
          </table>
          <table width="582" align="center" cellspacing="0" cellpadding="0">
            <tr>
              <td width="50%" align="center">`}
                <Product data={this.props.data[2]} />
            {`</td>
              <td width="50%" align="center">`}
                <Product data={this.props.data[3]} />
            {`</td>
            </tr>
          </table>`}
        </div>
      );
    case "5":
      return (
        <div>
        {`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[0]} />
            {`</td>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[1]} />
            {`</td>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[2]} />
              {`</td>
            </tr>
          </table>
          <table width="582" align="center" cellspacing="0" cellpadding="0">
            <tr>
              <td width="50%" align="center">`}
                <Product data={this.props.data[3]} />
            {`</td>
              <td width="50%" align="center">`}
                <Product data={this.props.data[4]} />
            {`</td>
            </tr>
          </table>`}
        </div>
      );
    case "6":
      return (
        	<div>
      		{`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
			      	<tr>
					      <td align="center" width="33.3%">`}
      			      <Product data={this.props.data[0]} />
      	      {`</td>
                <td align="center" width="33.3%">`}
                  <Product data={this.props.data[1]} />
              {`</td>
                <td align="center" width="33.3%">`}
                  <Product data={this.props.data[2]} />
                {`</td>
              </tr>
            </table>
			      <table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				      <tr>
					      <td align="center" width="33.3%">`}
      			      <Product data={this.props.data[4]} />
              {`</td>
                <td align="center" width="33.3%">`}
                  <Product data={this.props.data[5]} />
              {`</td>
                <td align="center" width="33.3%">`}
                  <Product data={this.props.data[6]} />
                {`</td>
              </tr>
            </table>`}
          </div>
        );
      case "7":
        return (
        	<div>
          {`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[0]} />
            {`</td>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[1]} />
            {`</td>
              <td align="center" width="33.3%">`}
                <Product data={this.props.data[2]} />
              {`</td>
            </tr>
          </table>
          <table width="582" align="center" cellspacing="0" cellpadding="0">
            <tr>
              <td width="50%" align="center">`}
                <Product data={this.props.data[3]} />
            {`</td>
              <td width="50%" align="center">`}
                <Product data={this.props.data[4]} />
            {`</td>
            </tr>
          </table>
          <table width="582" align="center" cellspacing="0" cellpadding="0">
            <tr>
              <td width="50%" align="center">`}
                <Product data={this.props.data[5]} />
            {`</td>
              <td width="50%" align="center">`}
                <Product data={this.props.data[6]} />
            {`</td>
            </tr>
          </table>`}
        </div>
        );
        case "8":
          return (
            <div>
			{`<table width="582" align="center" cellspacing="0" cellpadding="0">
					<tr>
						<td width="50%" align="center">`}
      <Product data={this.props.data[0]} />
      {`</td>
						<td width="50%" align="center">`}
      <Product data={this.props.data[1]} />
      {`</td>
				</tr>
			</table>
    	<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
  			    <Product data={this.props.data[2]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={this.props.data[3]} />
      	{`</td>
				</tr>
			</table>
			<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
      			<Product data={this.props.data[4]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={this.props.data[5]} />
      	{`</td>
				</tr>
			</table>
    	<table width="582" align="center" cellspacing="0" cellpadding="0">
				<tr>
					<td width="50%" align="center">`}
  			    <Product data={this.props.data[6]} />
      	{`</td>
					<td width="50%" align="center">`}
      			<Product data={this.props.data[7]} />
      	{`</td>
				</tr>
			</table>`}
		</div>
          );
      case "9":
      return (
        		<div>
			{`<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={this.props.data[0]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={this.props.data[1]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={this.props.data[2]} />
					{`</td>
				</tr>
			</table>
			<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={this.props.data[3]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={this.props.data[4]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={this.props.data[5]} />
					{`</td>
				</tr>
			</table>
			<table align="center" width="582" border="0" cellpadding="0" cellspacing="0">
				<tr>
					<td align="center" width="33.3%">`}
      			<Product data={this.props.data[6]} />
      	{`</td>
					<td align="center" width="33.3%">`}
						<Product data={this.props.data[7]} />
				{`</td>
					<td align="center" width="33.3%">`}
						<Product data={this.props.data[8]} />
					{`</td>
				</tr>
			</table>`}
		</div>
      )
    default:
  }
}
};

export default Snippet;