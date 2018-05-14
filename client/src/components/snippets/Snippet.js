import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateCode } from "../../actions/index";
import Product from "./Product";
import Title from "./Title";
import Paragraph from "./Paragraph";
import Hero from "./Hero";
import CTA from "./CTA";
import Style from "./Style";
import AmpScript from "./ampScript/grid";

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
    setTimeout(() => {
      this.setState({ copySuccess: "" });
    }, 3000);
  }

  componentDidMount() {
    this.props.updateCode(this.textArea.textContent);
  }

  componentDidUpdate() {
    this.props.updateCode(this.textArea.textContent);
  }

  bundleValue() {
    if (this.props.ampScript) {
      return (
        Style() +
        AmpScript(this.props)
      )
    }
    return (
      Style() +
      Hero(this.props.hero) +
      Title(this.props.gridTitle) +
      Paragraph(this.props.paragraph) +
      CTA(this.props.topCTA, this.props.category) +
      this.getGrid(this.props.numberOfProducts) +
      CTA(this.props.CTA, this.props.category)
    );
  }

  render() {
    const copied = this.state.copySuccess  ? <div className="copied">Copied</div> : "";
    
    return (
      <div className="col-12">
        {copied}
        <form
          className="input-group input-group-sm"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <button
            type="button"
            className="btn btn-primary btn-sm copyButton"
            onClick={this.copyToClipboard}
          >
            Copy HTML
          </button>
          <textarea
            ref={textarea => (this.textArea = textarea)}
            readOnly={true}
            className="form-control"
            id="snippetContainer"
            type="text-area"
            value={this.bundleValue()}
          />
        </form>
      </div>
    );
  }

  getGrid(numProds) {
    switch (numProds) {
      case "1":
        return Product(
          this.props.data[0],
          this.props.enablePrice,
          this.props.enableName
        );
      case "2":
        return `<table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">
                  ${Product(
                    this.props.data[0],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td width="50%" align="center">
                  ${Product(
                    this.props.data[1],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>`;
      case "3":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[0],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[1],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[2],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <!-- mobile view -->
            <!--[if !mso]><!-- -->
            <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" width="50%">
                    ${Product(
                      this.props.data[0],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="50%">
                    ${Product(
                      this.props.data[1],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
            </div>
            <!--<![endif]-->`;
      case "4":
        return `<table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">
                  ${Product(
                    this.props.data[0],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td width="50%" align="center">
                  ${Product(
                    this.props.data[1],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <table width="100%" align="center" cellspacing="0" cellpadding="0">
              <tr>
                <td width="50%" align="center">
                  ${Product(
                    this.props.data[2],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td width="50%" align="center">
                  ${Product(
                    this.props.data[3],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>`;
      case "5":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[0],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[1],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                  </td>
                  <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[2],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                  </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">
                    ${Product(
                      this.props.data[3],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td width="50%" align="center">
                    ${Product(
                      this.props.data[4],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[0],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[1],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[2],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[3],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%" style="max-width: 50%;">
                      ${Product(
                        this.props.data[4],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "6":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
                <tr>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[0],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[1],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[2],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
                <tr>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[3],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[4],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[6],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[0],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                  </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[1],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[2],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[3],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[4],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[5],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "7":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
                <tr>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[0],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[1],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td align="center" width="33.3%">
                    ${Product(
                      this.props.data[2],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">
                    ${Product(
                      this.props.data[3],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td width="50%" align="center">
                    ${Product(
                      this.props.data[4],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0" class="hide_mobile">
                <tr>
                  <td width="50%" align="center">
                    ${Product(
                      this.props.data[5],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                  <td width="50%" align="center">
                    ${Product(
                      this.props.data[6],
                      this.props.enablePrice,
                      this.props.enableName
                    )}
                  </td>
                </tr>
              </table>
              <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[0],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[1],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[2],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[3],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[4],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[5],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "8":
        return `<table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[0],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[1],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[2],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[3],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[4],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[5],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                </tr>
              </table>
              <table width="100%" align="center" cellspacing="0" cellpadding="0">
                  <tr>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[6],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td width="50%" align="center">
                      ${Product(
                        this.props.data[7],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                </tr>
              </table>`;
      case "9":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[0],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[1],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[2],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[3],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[4],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[5],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[6],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[7],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[8],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[0],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[1],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[2],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[3],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[4],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[5],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[6],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[7],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      case "12":
        return `<table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[0],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[1],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[2],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[3],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[4],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[5],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[6],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[7],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[8],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" class="hide_mobile">
              <tr>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[9],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[10],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
                <td align="center" width="33.3%">
                  ${Product(
                    this.props.data[11],
                    this.props.enablePrice,
                    this.props.enableName
                  )}
                </td>
              </tr>
            </table>
            <!-- mobile view -->
              <!--[if !mso]><!-- -->
              <div class="show_for_mobile" align="center" style="display: none; width: 0px; height: 0px; overflow: hidden; min-height: 0px; line-height: 0px; font-size: 0px;">
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[0],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[1],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[2],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[3],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[4],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[5],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[6],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[7],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[8],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[9],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
                <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[10],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                    <td align="center" width="50%">
                      ${Product(
                        this.props.data[11],
                        this.props.enablePrice,
                        this.props.enableName
                      )}
                    </td>
                  </tr>
                </table>
              </div>
              <!--<![endif]-->`;
      default:
    }
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateCode: updateCode
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    numberOfProducts: state.numberOfProducts,
    gridTitle: state.title,
    CTA: state.CTACopy,
    topCTA: state.TopCTACopy,
    paragraph: state.paragraphCopy,
    ampScript: state.isAmpScriptEnable
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Snippet);