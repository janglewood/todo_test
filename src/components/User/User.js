import React from 'react';
import * as S from './styled';
import { deleteProfile } from '../../actions/index';
import { useDispatch } from 'react-redux';

const User = (props) => {
  const { firstname, lastname, id } = props.user; //is selector need here?
  const dispatch = useDispatch();
  return (
    <>
      <S.Container to={`user/${id}`}>
        {firstname} {lastname}
      </S.Container>
      <button
        onClick={() => dispatch(deleteProfile(id))}>Delete</button>
    </>
  )
}

export default User;