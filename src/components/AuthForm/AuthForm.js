import React from 'react';
import S from './styled';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { userRegistration, userLogin } from '../../actions';
import InputField from '../AddForm/InputField/InputField';
import authConfig from '../../configs/authConfig';

const AuthForm = ({ isLogin }) => {
  const dispatch = useDispatch();
  const currentConfig = isLogin ? authConfig.filter(input => {
    return input.name !== 'firstname' && input.name !== 'lastname';
  }) : authConfig;
  return (
    <S>
      <Form
        onSubmit={(values) => dispatch((isLogin ? userLogin(values) : userRegistration(values)))}
        validate={values => {
          const errors = {};
          if (!isLogin && !values.firstname) {
            errors.firstname = 'Required';
          };
          if (!isLogin && !values.lastname) {
            errors.lastname = 'Required';
          };
          if (!values.username) {
            errors.username = 'Required';
          };
          if (!values.password) {
            errors.password = 'Required';
          };
          return errors;
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
              {currentConfig.map(input => (
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
                <button type="submit" disabled={submitting}>
                  {isLogin ? 'Log In' : 'Register'}
                </button>
              </div>
            </form>
          )}
      />
    </S>
  )
};

export default AuthForm;