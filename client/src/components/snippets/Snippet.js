import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

const style = `<!--[if !mso]><!-- -->
<style type="text/css">
 @media only screen and (max-width: 480px) {
  .MobileCtaTextSize {
   font-size: 2.5vw !important;
  }
 }

 @media only screen and (max-width: 600px) {
  .hide_mobile {
   display: none !important;
   width: 0px !important;
   height: 0px !important;
   visibility: hidden !important;
   overflow: hidden !important;
   font-size: 0px !important;
   line-height: 0px !important;
  }
  .show_for_mobile {
   display: block !important;
   width: auto !important;
   height: auto !important;
   overflow: visible !important;
   position: static !important;
   min-height: 0px !important;
   line-height: normal !important;
   font-size: medium !important;
  }
 }
</style>
<!--<![endif]-->`;

class Snippet extends Component {
  render () {
    console.log("PROPS in snippet", this.props)
    if (this.props.title) {
      console.log("INSIDE CONDITION")
      return (
        <div id="snippetContainer">
          {style}<Title title={this.props.title}/>{this.getGrid(this.props.numProds)}
        </div>
      )
    } else {
      console.log("OUTSIDE CONDITION");
      return (
        <div id="snippetContainer">
          {style}{this.getGrid(this.props.numProds)}
        </div>
      )
    }
  }
  getGrid(numProds) {
    switch (numProds) {
      case "1":
        return (
          <div id="snippet">
            <Product data={this.props.data[0]} />
          </div>
        );
      case "2":
        return (
          <div id="snippet">
            {`<table width="100%" align="center" cellspacing="0" cellpadding="0">
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
          <div id="snippet">
            {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
            <!-- mobile view -->
            <!--[if !mso]><!-- -->
            <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" width="50%">`}
                    <Product data={this.props.data[0]} />
                {`</td>
                  <td align="center" width="50%">`}
                    <Product data={this.props.data[1]} />
                {`</td>
                </tr>
              </table>
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" width="50%" style="max-width: 50%;">`}
                    <Product data={this.props.data[2]} />
                {`</td>
                </tr>
              </table>
            </div>
            <!--<![endif]-->`}
          </div>
        );
      case "4":
        return (
          <div id="snippet">
          {`<table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">`}
                  <Product data={this.props.data[0]} />
              {`</td>
                <td width="50%" align="center">`}
                  <Product data={this.props.data[1]} />
              {`</td>
              </tr>
            </table>
            <table width="100%" align="center" cellspacing="0" cellpadding="0">
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
          <div id="snippet">
          {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[3]} />
                {`</td>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[4]} />
                {`</td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[0]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[1]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[2]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[3]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%" style="max-width: 50%;">`}
                      <Product data={this.props.data[4]} />
                  {`</td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->
              `}
            </div>
          );
        case "6":
          return (
            <div id="snippet">
              {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
                </table>
                <!-- mobile view -->
                <!--[if !mso]><!-- -->
                <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" width="50%">`}
                        <Product data={this.props.data[0]} />
                    {`</td>
                      <td align="center" width="50%">`}
                        <Product data={this.props.data[1]} />
                    {`</td>
                    </tr>
                  </table>
                  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" width="50%">`}
                        <Product data={this.props.data[2]} />
                    {`</td>
                      <td align="center" width="50%">`}
                        <Product data={this.props.data[3]} />
                    {`</td>
                    </tr>
                  </table>
                  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" width="50%">`}
                        <Product data={this.props.data[4]} />
                    {`</td>
                      <td align="center" width="50%">`}
                        <Product data={this.props.data[5]} />
                    {`</td>
                    </tr>
                  </table>
                </div>
                <!--<![endif]-->`}
              </div>
            );
          case "7":
            return (
              <div id="snippet">
              {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[3]} />
                {`</td>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[4]} />
                {`</td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[5]} />
                {`</td>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[6]} />
                {`</td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[0]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[1]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[2]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[3]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[4]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[5]} />
                  {`</td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`}
            </div>
            );
          case "8":
            return (
              <div id="snippet">
              {`<table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">`}
              <Product data={this.props.data[0]} />
              {`</td>
                    <td width="50%" align="center">`}
              <Product data={this.props.data[1]} />
              {`</td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[2]} />
                {`</td>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[3]} />
                {`</td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[4]} />
                {`</td>
                  <td width="50%" align="center">`}
                    <Product data={this.props.data[5]} />
                {`</td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
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
            <div id="snippet">
              {`<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
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
            </table>
            <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[0]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[1]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[2]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[3]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[4]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[5]} />
                  {`</td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[6]} />
                  {`</td>
                    <td align="center" width="50%">`}
                      <Product data={this.props.data[7]} />
                  {`</td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`}
          </div>
          );
        default:
      }
    }
};

export default Snippet;