import React from 'react';
import User from '../../components/User/User';
import * as S from './styled';
import useSelectorHook from '../../hooks/useSelector';

const UserListPage = () => {
	const users = useSelectorHook();
  return (
		<ul>
			{users.length ? users.map((user, index) => {
				return <S.ListItem key={index}>
							 	<User user={user} index={index}/>
						   </S.ListItem>	
				})
			 : 'Loading...'}
		</ul>
  )
};

export default UserListPage;