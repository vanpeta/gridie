import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import CTA from "./CTA";

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
  constructor(props) {
    super(props);
    this.state = {
      copySuccess: ""
    };
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  copyToClipboard(e) {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
    this.setState({ copySuccess: "Copied!" });
  }

  render() {
    return (
      <div className="col-12">
        {this.state.copySuccess}
        <form
          className="input-group input-group-sm"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={this.copyToClipboard}
          >
            Copy
          </button>
          <textarea
            ref={textarea => (this.textArea = textarea)}
            readOnly={true}
            className="form-control"
            id="snippetContainer"
            type="text-area"
            value={style + Title(this.props.title) + this.getGrid(this.props.numProds) + CTA(this.props.CTA, this.props.category)}
          />
        </form>
      </div>
    );
  }

  getGrid(numProds) {
    switch (numProds) {
      case "1":
        return Product(this.props.data[0]);
      case "2":
        return `<table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">
                  ${Product(this.props.data[0])}
                </td>
                <td width="50%" align="center">
                  ${Product(this.props.data[1])}
                </td>
              </tr>
            </table>`;
      case "3":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[0])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[1])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[2])}
                </td>
              </tr>
            </table>
            <!-- mobile view -->
            <!--[if !mso]><!-- -->
            <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" width="50%">
                    ${Product(this.props.data[0])}
                  </td>
                  <td align="center" width="50%">
                    ${Product(this.props.data[1])}
                  </td>
                </tr>
              </table>
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" width="50%" style="max-width: 50%;">
                    ${Product(this.props.data[2])}
                  </td>
                </tr>
              </table>
            </div>
            <!--<![endif]-->`;
      case "4":
        return `<table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">
                  ${Product(this.props.data[0])}
                </td>
                <td width="50%" align="center">
                  ${Product(this.props.data[1])}
                </td>
              </tr>
            </table>
            <table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">
                  ${Product(this.props.data[2])}
                </td>
                <td width="50%" align="center">
                  ${Product(this.props.data[3])}
                </td>
              </tr>
            </table>`;
      case "5":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[0])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[1])}
                  </td>
                  <td align="center" width="33.3%">
                  ${Product(this.props.data[2])}
                  </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">
                    ${Product(this.props.data[3])}
                  </td>
                  <td width="50%" align="center">
                    ${Product(this.props.data[4])}
                  </td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[0])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[1])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[2])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[3])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%" style="max-width: 50%;">
                      ${Product(this.props.data[4])}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "6":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
                <tr>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[0])}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[1])}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[2])}
                  </td>
                </tr>
              </table>
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
                <tr>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[3])}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[4])}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[6])}
                  </td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[0])}
                  </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[1])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[2])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[3])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[4])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[5])}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "7":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
                <tr>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[0])}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[1])}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(this.props.data[2])}
                  </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">
                    ${Product(this.props.data[3])}
                  </td>
                  <td width="50%" align="center">
                    ${Product(this.props.data[4])}
                  </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">
                    ${Product(this.props.data[5])}
                  </td>
                  <td width="50%" align="center">
                    ${Product(this.props.data[6])}
                  </td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[0])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[1])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[2])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[3])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[4])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[5])}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "8":
        return `<table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(this.props.data[0])}
                    </td>
                    <td width="50%" align="center">
                      ${Product(this.props.data[1])}
                    </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(this.props.data[2])}
                    </td>
                    <td width="50%" align="center">
                      ${Product(this.props.data[3])}
                    </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(this.props.data[4])}
                    </td>
                    <td width="50%" align="center">
                      ${Product(this.props.data[5])}
                    </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(this.props.data[6])}
                    </td>
                    <td width="50%" align="center">
                      ${Product(this.props.data[7])}
                    </td>
                </tr>
              </table>`;
      case "9":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[0])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[1])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[2])}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[3])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[4])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[5])}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[6])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[7])}
                </td>
                <td align="center" width="33.3%">
                  ${Product(this.props.data[8])}
                </td>
              </tr>
            </table>
            <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[0])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[1])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[2])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[3])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[4])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[5])}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(this.props.data[6])}
                    </td>
                    <td align="center" width="50%">
                      ${Product(this.props.data[7])}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      default:
    }
  }
};

export default Snippet;