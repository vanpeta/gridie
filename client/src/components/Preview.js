import React, { Component } from "react";
import { connect } from "react-redux";


class Preview extends Component {
  // componentWillReceiveProps() {
    
  //     // this.ifr.contentWindow.postMessage(this.props.code, "*");
  //     console.log("componentWillReceiveProps => content document = ", this.ifr);
    
  // }

  render() {

    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.code }}
          // sandbox="allow-scripts"
          className="codeRender"
          // ref={f => (this.ifr = f)}
        />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    code: state.code
  };
}


export default connect(mapStateToProps)(Preview);