import React from 'react';
import { render } from 'react-dom';
import S from './styled';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { useDispatch } from 'react-redux';
import { userRegistration } from '../../actions';

const AuthForm = () => {
  const dispatch = useDispatch();
  return (
    <S>
      <Form
        onSubmit={(values) => dispatch(userRegistration(values))}
        validate={values => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = 'Required'
          };
          if (!values.lastname) {
            errors.lastname = 'Required'
          };
          if (!values.username) {
            errors.username = 'Required'
          };
          if (!values.password) {
            errors.password = 'Required'
          };
          return errors
        }}
        render={({
          submitError,
          handleSubmit,
          form,
          submitting,
          pristine,
          values
        }) => (
            <form onSubmit={handleSubmit}>
              <Field name="firstname">
                {({ input, meta }) => (
                  <div>
                    <label>Firstname</label>
                    <input {...input} type="text" placeholder="Firstname" />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="lastname">
                {({ input, meta }) => (
                  <div>
                    <label>Lastname</label>
                    <input {...input} type="text" placeholder="Lastname" />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder="Username" />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              {submitError && <div className="error">{submitError}</div>}
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Register
            </button>
              </div>
            </form>
          )}
      />
    </S>
  )
};

export default AuthForm;