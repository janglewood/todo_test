import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import  { addTask, cancelForm } from '../../actions/index';
import { Form, Field } from 'react-final-form';
import Container from './styled';

const AddForm = ({addTask, cancelForm}) => {
  return (
    <Container>
      <Form
        onSubmit={(task) => addTask(task)}
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
            <button type="button" onClick={cancelForm}>
                Cancel
            </button>
          </form>
      )}
    />
  </Container>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTask: addTask,
  cancelForm: cancelForm,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
