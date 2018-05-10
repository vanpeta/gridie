import React, { Component } from "react";
import { connect } from "react-redux";


class Preview extends Component {

  render() {
    const Code = this.props.code ? <div dangerouslySetInnerHTML={{ __html: this.props.code }} className="codeRender" /> : '';
    return (
      <div>
        {Code}
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