import React from 'react';
import User from '../../components/User/User';
import * as S from './styled';
import useSelectorHook from '../../hooks/useSelector';
import { getProfileSaga } from '../../sagas/getProfilesSaga';
import { useSaga } from '../../hooks/useSaga';


const UserListPage = () => {
	useSaga(getProfileSaga);

	const users = useSelectorHook();
	return (
		<ul>
			{users.length ? users.map((user, index) => {
				return (
					<S.ListItem key={index}>
						<User user={user} index={index} />
					</S.ListItem>)
			})
				: 'Loading...'}
		</ul>
	)
};

export default UserListPage;