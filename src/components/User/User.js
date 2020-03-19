import React from 'react';
import * as S from './styled';
import { deleteProfile } from '../../actions/index';
import { useDispatch } from 'react-redux';
import useCurrentSessionHook from '../../hooks/useCurrentSession';

const User = (props) => {
  const { role } = useCurrentSessionHook();
  const { firstname, lastname, id } = props.user;
  const dispatch = useDispatch();
  return (
    <>
      <S.Container to={`user/${id}`}>
        {firstname} {lastname}
      </S.Container>
      {role === 'ADMIN' ?
        <button onClick={() => dispatch(deleteProfile(id))}>Delete</button>
        :
        null
      }
    </>
  )
};

export default User;