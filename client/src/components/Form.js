import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import CategoryField from "./CategoryField";

class Form extends Component {
	render() {
		return <div>
        <form onSubmit={this.props.handleSubmit(values =>
            console.log(values)
          )}>
          <Field name="category" type="text" component={CategoryField} label="Category URL" />
          <button type="submit">Get Gridie</button>
        </form>
      </div>;
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
