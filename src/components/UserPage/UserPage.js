import React from 'react';
import * as S from './styled';
import {editProfile} from '../../actions/index';
import { useSaga } from '../../hooks/useSaga';
import { editProfileSaga } from '../../sagas/editProfileSaga';
import { push } from 'connected-react-router';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

const UserPage =  (props) => {
    const { history, tasks, editProfile } = props;
    const { params: { userId } } = history.match;
    const userData = tasks.tasks[userId - 1];
    useSaga(editProfileSaga);
    return <S.Container>
                <h3>Name: {`${userData.firstName} ${userData.lastName}`}</h3>
                <h5>Email: {userData.email}</h5>
                <h5>Description: {userData.description || 'none'}</h5>

                <button onClick={editProfile}>Edit profile</button>
           </S.Container>
};

const mapDispatchToProps = dispatch => bindActionCreators({
    editProfile: editProfile,
  }, dispatch);
  
  export default connect(
    null,
    mapDispatchToProps,
  )(UserPage);