import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = ({isLogin}) => {
  return (
    <AuthForm isLogin={isLogin}/>
  )
};

export default AuthPage;