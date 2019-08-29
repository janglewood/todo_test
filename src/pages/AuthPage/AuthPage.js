import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = ({isLogin}) => {
  return (
    <AuthForm isLogin={isLogin}/>
  )
};

export default AuthPage;