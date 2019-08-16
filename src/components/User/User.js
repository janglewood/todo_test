import React from 'react';
import * as S from './styled';

const User = (props) => {
  const { firstName, lastName } = props.user;
  return ( 
    <S.Container>{firstName} {lastName}</S.Container>
  )
}

export default User;