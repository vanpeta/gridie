import React, { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm, submit } from "redux-form";

import { updateTopCTA, updateBottomCTA } from "../../actions/index";

class InputTopCTA extends Component {
  updateAppState(newState) {
    if (this.props.mode === "top") {
      this.props.newTopCta(newState);
    } else {
      this.props.newBottomCta(newState);
    }
  }
	renderFields(field) {
		
		return (
			<div>
				<label htmlFor={field.name}>{field.label}</label>
				<input
					className="input checkbox"
					id={field.name}
					type={field.type}
					//onChange={() => dispatch(submit('remoteSubmit'))}
					{...field.input}
				/>
				{field.meta.error}
			</div>
		)
	}


	handleChange(event) {
		console.log(event);
		// updateAppState(newState);
	}

	onSubmit(values) {
		console.log(values);
		// updateAppState(newState);
	}
  render() {
		const { handleSubmit } = this.props;
    return (
      <div className="col-12 bg-light m-1 p-1">
				<form onSubmit={handleSubmit}>
					<Field name="copy" label="copy" type="text" component={this.renderFields} />
					<Field name="topPadding" label="topPadding" type="number" min="0" component={this.renderFields} />
					<Field name="bottomPadding" label="bottomPadding" type="number" min="0" component={this.renderFields} />
					<Field name="width" label="width" type="number" min="0" component={this.renderFields} />
					<Field name="border" label="border" type="checkbox" component={this.renderFields} />
					<Field name="borderWidth" label="borderWidth" type="number" min="0" component={this.renderFields} />
					<Field name="borderColor" label="borderColor" type="color" component={this.renderFields} />
					<Field name="color" label="color" type="color" component={this.renderFields} />
					<Field name="backgroundColor" label="backgroundColor" type="color" component={this.renderFields} />
        </form>
      </div>
    );
  }
}

function validate(values) {
	const errors = {};
	return errors;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			newTopCta: updateTopCTA,
			newBottomCta: updateBottomCTA
		},
		dispatch
	);
}

InputTopCTA = reduxForm({ validate, form: "ctaForm" })(InputTopCTA);

InputTopCTA = connect(mapDispatchToProps)(InputTopCTA);
export default InputTopCTA;