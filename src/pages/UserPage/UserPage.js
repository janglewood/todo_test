import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/styled';
import { getUserSaga } from '../../sagas/getUserSaga';
import { useSaga } from '../../hooks/useSaga';
import useUserSelectorHook from '../../hooks/useUserSelector';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const UserPage = ({ match }) => {
  const { params: { userId } } = match;
  const dispatch = useDispatch();
  useSaga(getUserSaga, [userId]);
  const userData = useUserSelectorHook(userId);
  const isLoading = useSelector(state => state.users.usersProfileData.isLoading);
  const override = css`
		display: block;
		margin: 0 auto;
		border-color: red;
	`;
	if (isLoading) {
		return ( 
			<ClipLoader
				css={override}
				sizeUnit={"px"}
				size={100}
				color={'#fff'}
				loading={isLoading}
			/>)
	} else {
    return <S.Container>
      <h3>Name: {`${userData.firstname} ${userData.lastname}`}</h3>
      <h5>Email: {userData.email}</h5>
      <h5>Description: {userData.description || 'none'}</h5>

      <Button onClick={() => dispatch(push(`/edit/user/${userId}`))}>Edit profile</Button>
    </S.Container>
  };
};

export default UserPage;