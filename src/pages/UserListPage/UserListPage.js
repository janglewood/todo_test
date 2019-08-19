import React from 'react';
import User from '../../components/User/User';
import { connect, useSelector } from  'react-redux';
import * as S from './styled';
import useSelectorHook from '../../hooks/useSelector';

const UserListPage = () => {
	const users = useSelectorHook();
  return (
		<ul>
			{users.map((user, index) => {
				return <S.ListItem key={index}>
							 	<User user={user} index={index}/>
						   </S.ListItem>	
				})
			}
		</ul>
  )
};

export default UserListPage;