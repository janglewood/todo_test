import React from 'react';
import * as S from './styled';

export const UserPage =  (props) => {
    const { history, tasks } = props;
    const { params: { userId } } = history.match;
    const userData = tasks.tasks[userId - 1];
    console.log(userData);
    return <S.Container>
            <h3>Name: {`${userData.firstName} ${userData.lastName}`}</h3>
            <h5>Email: {userData.email || 'none'}</h5>
            <h5>Description: {userData.description || 'none'}</h5>
           </S.Container>
};