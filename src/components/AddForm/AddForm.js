import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import  { addProfile, cancelForm, editProfile } from '../../actions/index';
import { Form, Field } from 'react-final-form';
import Container from './styled';
import { useSaga } from '../../hooks/useSaga';
import { addFormFlowSaga } from '../../sagas/addFormSaga';
import { editProfileSaga } from '../../sagas/editProfileSaga'
import MakeAsyncFunction from 'react-redux-promise-listener'
import { promiseListener } from '../../store/configureStore';
import { ADD_PROFILE, SUBMIT_FALSE, EDIT_PROFILE } from '../../actions/constants';
import InputField from './InputField/InputField';
import formConfig from '../../configs/formConfig';
import { mockPostRequest } from '../../utils/request';
import { FORM_ERROR } from 'final-form';

const AddForm = ({ cancelForm , isEditing, editingUser, userId, addProfile }) => {
  useSaga(isEditing ? editProfileSaga : addFormFlowSaga);

  return (
    <Container>
      <Form
        onSubmit={values => {
          return new Promise((resolve, reject) => {
            addProfile(values, resolve)
          }) 
        }}
        initialValues={editingUser}
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
        render={(props) => {
          const  { handleSubmit, form, submitting, pristine, values, submitErrors } = props;
          console.log(props)
          return (
          <form onSubmit={handleSubmit}>
            {formConfig.map(input => (
              <Field name={input.name} key={input.name}>
                {data => (
                  <InputField
                    data={data}
                    type={input.type}
                    placeholder={input.placeholder}
                    isRequired={input.isRequired}
                    component={input.component}
                  />
              )}
              </Field>
            ))}
            <div className="buttons">
              <button type="submit" disabled={pristine || (submitErrors && submitting)}>
                {isEditing ? 'Edit profile' : 'Add user'}
              </button>
              <button type="button" onClick={cancelForm}>
                Cancel
              </button>
            </div>
            {submitErrors && <div className="error">{submitErrors[FORM_ERROR]}</div>}
          </form>
        )}}
      />
  </Container>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addProfile: addProfile,
  cancelForm: cancelForm,
  editProfile: editProfile,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
