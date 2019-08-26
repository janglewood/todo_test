import React from 'react';
// import { useDispatch } from 'react-redux';
import { cancelForm } from '../../actions/index';
import { Form, Field } from 'react-final-form';
import Container from './styled';
import MakeAsyncFunction from 'react-redux-promise-listener'
import { promiseListener } from '../../store/configureStore';
import { ADD_PROFILE, SUBMIT_FALSE, EDIT_PROFILE } from '../../actions/constants';
import InputField from './InputField/InputField';
import formConfig from '../../configs/formConfig';
import { useActions } from '../../hooks/useActions';

const AddForm = ({ isEditing, editingUser, userId }) => {
  const actions = useActions({
    'cancelForm': cancelForm,
  });
  return (
    <Container>
      <MakeAsyncFunction
        listener={promiseListener}
        start={isEditing ? EDIT_PROFILE : ADD_PROFILE}
        resolve={SUBMIT_FALSE}
        setPayload={(action, payload) => ({ ...action, payload, userId })}
      >{asyncFunc => (
        <Form
          onSubmit={asyncFunc}
          initialValues={editingUser}
          validate={values => {
            const errors = {};
            if (!values.firstname) {
              errors.firstname = 'Required';
            }
            if (!values.lastname) {
              errors.lastname = 'Required';
            }
            if (!values.email) {
              errors.email = 'Required';
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values, submitErrors }) => {
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
                  <button type="button" onClick={actions.cancelForm}>
                    Cancel
              </button>
                </div>
                {submitErrors && <div className="error">{submitErrors}</div>}
              </form>
            )
          }}
        />)}
      </MakeAsyncFunction>
    </Container>
  )
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//   addProfile: addProfile,
//   cancelForm: cancelForm,
//   editProfile: editProfile,
// }, dispatch);

export default AddForm;
