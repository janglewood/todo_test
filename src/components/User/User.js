import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import {bindActionCreators} from 'redux';
import { deleteProfile } from '../../actions/index';
import { connect } from  'react-redux';


const User = (props) => {  
  const { firstName, lastName } = props.user;
  const { push, index, deleteProfile } = props;

  const goToUserPage = (index) => push(`user/${index + 1}`);
  return (
    <> 
      <S.Container onClick={goToUserPage.bind(null, index)}>
        {firstName} {lastName}
      </S.Container>
      <button onClick={() => deleteProfile(index)}>Delete</button>
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  push: push,
  deleteProfile: id => deleteProfile(id),
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(User);