import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Form extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values =>
						console.log(values)
					)}>
					<Field />
					<button type="submit">
						Get Gridie
					</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
  const errors = {};

  return errors;
}

export default reduxForm({
  validate: validate,
  form: "form"
})(Form);
