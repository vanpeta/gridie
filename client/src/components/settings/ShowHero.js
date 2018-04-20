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
      <div className="col-9">
        <form
          className="input-group input-group-sm"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Show Hero
            </span>
          </div>
          <input
            type="checkbox"
            checked={this.state.enable}
            onChange={e => this.handleChange(e)}
            className="form-control"
            id="basic-url"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
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