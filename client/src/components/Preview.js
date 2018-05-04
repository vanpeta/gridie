import React, { Component } from "react";
import { connect } from "react-redux";


class Preview extends Component {

  render() {
    console.log("!!!!!!!!!!!!!!!!", this.props.code);
    return (
      <div>
        { this.props.code }
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