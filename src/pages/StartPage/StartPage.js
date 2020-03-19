import React from 'react';
import User from '../../components/User/User';
import * as S from './styled';
import useSelectorHook from '../../hooks/useSelector';
import { getProfilesSaga } from '../../sagas/getProfilesSaga';
import { deleteProfileSaga } from '../../sagas/deleteProfileSaga';
import { useSaga } from '../../hooks/useSaga';
import { Link } from "react-router-dom";
import Button from '../../components/Button/styled';
import { useSelector } from 'react-redux';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const StartPage = () => {
  return (
    <div>
      <Link to='/login'>
        <Button>Log In</Button>
      </Link>
      <Link to='/register'>
        <Button>Register</Button>
      </Link>
    </div>
  )
};

export default UserListPage;