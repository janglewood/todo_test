import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import AuthForm from '../../components/AuthForm/AuthForm';
import { useSaga } from '../../hooks/useSaga';
import { authSaga } from '../../sagas/authSaga';

const AuthPage = ({isLogin}) => {
  useSaga(authSaga);
  return (
    <AuthForm isLogin={isLogin}/>
  )
};

export default AuthPage;