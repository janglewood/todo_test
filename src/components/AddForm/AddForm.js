import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import  { addTask, cancelForm } from '../../actions/index';
import { Form, Field } from 'react-final-form';
import Container from './styled';
import { useSaga } from '../../hooks/useSaga';
import { addFormFlowSaga } from '../../sagas/addFormSaga';

const AddForm = ({addTask, cancelForm}) => {
  useSaga(addFormFlowSaga);

  return (
    <Container>
      <Form
        onSubmit={addTask}
        validate={values => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = 'Required';
          }
          if (!values.lastName) {
          errors.lastName = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName">
              {({ input, meta }) => (
                <div>
                  <label>First name</label>
                  <input {...input} type="text" placeholder="First name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="lastName">
              {({ input, meta }) => (
                <div>
                  <label>Last name</label>
                  <input {...input} type="text" placeholder="Last name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <div>
                  <label>Email</label>
                  <input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <div>
                  <label>Description</label>
                  <textarea {...input} type="text" placeholder="Description" />
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button
                type="button"
                onClick={cancelForm}
              >
                Cancel
              </button>
            </div>
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
