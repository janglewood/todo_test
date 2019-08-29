import React from 'react';
import User from '../../components/User/User';
import * as S from './styled';
import useSelectorHook from '../../hooks/useSelector';
import { getProfilesSaga } from '../../sagas/getProfilesSaga';
import { deleteProfileSaga } from '../../sagas/deleteProfileSaga';
import { useSaga } from '../../hooks/useSaga';
import { useSelector } from 'react-redux';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

const UserListPage = () => {
	useSaga(getProfilesSaga);
	useSaga(deleteProfileSaga);
	const isLoading = useSelector(state => state.users.usersListData.isLoading);
	const users = useSelectorHook();
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
		return (
			<ul>
				{users.map((user, index) => {
					return (
						<S.ListItem key={index}>
							<User user={user} index={index} />
						</S.ListItem>)
				})}
			</ul>
		)
	}
};

export default UserListPage;