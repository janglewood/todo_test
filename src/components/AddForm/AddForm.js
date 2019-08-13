import React from 'react';
import { connect } from 'react-redux';
import addTask from '../../actions/index';
import { Form, Field } from 'react-final-form';
import Container from './styled';


const AddForm = (props) => {
  return (
    <Container>
      <Form
        onSubmit={props.addTaskAction}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label>Description</label>
              <Field
                name="description"
                component="textarea"
                type="text-area"
                placeholder="Description"
              />
            </div>
            <button type="submit" disabled={submitting || pristine}>
                Submit
            </button>
          </form>
      )}
    />
  </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addTaskAction: task => dispatch(addTask(task)),
  }
};

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
