import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import {bindActionCreators} from 'redux';
import { deleteProfile, getProfiles } from '../../actions/index';
import { connect } from  'react-redux'; 
import { useState } from 'react';
import Error from '../Error/styled';

const User = (props) => {
  const [ deleteError, setDeleteError ] = useState(null); 
  const { firstname, lastname, id } = props.user;
  const { push, deleteProfile, getProfiles } = props;

  const goToUserPage = (id) => push(`user/${id}`);

  const deleteP = async (id) => {
    const request = await fetch('/delete', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id}),
    });
    if (request.status === 200) {
      deleteProfile(id);
    } else {
      setDeleteError(request.statusText);
      // throw new Error(request.statusText);
    }
  }; 

  return (
    <> 
      <S.Container onClick={goToUserPage.bind(null, id)}>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  push: push,
  deleteProfile: id => deleteProfile(id),
  getProfiles: getProfiles,
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(User);