import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import  { addTask, cancelForm } from '../../actions/index';
import { Form, Field } from 'react-final-form';
import Container from './styled';
import { useSaga } from '../../hooks/useSaga';
import { addFormFlowSaga } from '../../sagas/addFormSaga';
import MakeAsyncFunction from 'react-redux-promise-listener'
import { promiseListener } from '../../store/configureStore';
import { ADD_TASK, SUBMIT_FALSE } from '../../actions/constants';

const AddForm = (props) => {
  const {cancelForm} = props;
  useSaga(addFormFlowSaga);

  const createField = ({ input, meta }, type, placeholder, isRequired, component) => {
    return ( 
      <div>
        <label>{placeholder}</label>
        {component === 'input' ? 
          <input {...input} type={type} placeholder={placeholder} />
          :
          <textarea {...input} type={type} placeholder={placeholder} />
        }
        {isRequired ? meta.error && meta.touched && <span>{meta.error}</span> : null}
      </div>
      )                 
  }

  return (
    <Container>
      <MakeAsyncFunction
        listener={promiseListener}
        start={ADD_TASK}
        resolve={SUBMIT_FALSE}
      >{asyncFunc => ( 
      <Form
        onSubmit={asyncFunc}
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
        render={({ handleSubmit, form, submitting, pristine, values, submitErrors }) => {
          return (
          <form onSubmit={handleSubmit}>
            <Field name="firstName">
              {(data) => (
                createField(data, 'text', 'First name', true, 'input')
              )}
            </Field>
            <Field name="lastName">
              {(data) => (
                createField(data, 'text', 'Last name', true, 'input')
              )}
            </Field>
            <Field name="email">
              {(data) => (
                  createField(data, 'email', 'Email', true, 'input')
              )}
            </Field>
            <Field name="description">
              {(data) => (
                  createField(data, 'textarea', 'Description', false)
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={pristine || (submitErrors && submitting)}>
                Submit
              </button>
              <button type="button" onClick={cancelForm}>
                Cancel
              </button>
            </div>
            {submitErrors && <div className="error">{submitErrors}</div>}
          </form>
        )}}
      />)}
    </MakeAsyncFunction>
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
