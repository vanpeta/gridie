import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";


import CategoryField from "./CategoryField";

class Form extends Component {
	render() {
    console.log(this.props)
		return <div>
        <form onSubmit={this.props.handleSubmit(values =>
            console.log(values)
          )}>
          <Field name="category" type="text" component={CategoryField} label="Category URL" />
          <button type="submit" className="btn">Get Gridie</button>
        </form>
      </div>;
	}
}

function validate(values) {
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps)(
  reduxForm({
    validate: validate,
    form: "categoryForm"
  })(Form)
);
