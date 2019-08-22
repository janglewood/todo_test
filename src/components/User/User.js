import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import { deleteProfile } from '../../actions/index';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Error from '../Error/styled';

const User = (props) => {
  const [deleteError, setDeleteError] = useState(null);
  const { firstname, lastname, id } = props.user; //is selector need here?
  const dispatch = useDispatch();

  const goToUserPage = (id) => push(`user/${id}`);

  const deleteP = async (id) => {
    const request = await fetch('/delete', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
    });
    if (request.status === 200) {
      dispatch(deleteProfile(id));
    } else {
      setDeleteError(request.statusText);
      // throw new Error(request.statusText);
    }
  };

  return (
    <>
      <S.Container onClick={() => dispatch(goToUserPage(id))}>
        {firstname} {lastname}
      </S.Container>
      <button
        onClick={() => {
          deleteP(id);
        }}>Delete</button>
      {deleteError ? <Error>{deleteError}</Error> : null}
    </>
  )
}

export default User;