import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { heroEnable } from "../../actions/index";

class ShowHero extends Component {
  constructor(props) {
    super(props);
    this.state = { enable: false };
    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ enable: !this.state.enable }, () => {
      this.props.updateHeroSetting(this.state.enable);
    });
  }

  render() {
    return (
      <div className="col-12 bg-light m-1 p-1">
        <form
          className="p-1"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="checkbox"
            checked={this.state.enable}
            onChange={e => this.handleChange(e)}
            className="d-inline-block m-2 checkbox"
            id="hero"
          />
          <label htmlFor="hero" className="m-2 d-inline-block checkbox-text">
              Add Hero
          </label>
        </form>
      </div>
    );
  }
} 

function mapStateToProps (state) {
	return {
			heroSetting: state.isHeroEnable
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			updateHeroSetting: heroEnable
		},
		dispatch
	);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ShowHero);