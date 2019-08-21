import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/Button/styled';
import { getProfileSaga } from '../../sagas/getUserSaga';
import { useSaga } from '../../hooks/useSaga';

const UserPage = ({ history, users, push }) => {
  const { params: { userId } } = history.match;
  useSaga(getProfileSaga, [userId]);
  const userData = users.find(user => {
    return user.id === Number(userId);
  });
  return <S.Container>
              <h3>Name: {`${userData.firstname} ${userData.lastname}`}</h3>
              <h5>Email: {userData.email}</h5>
              <h5>Description: {userData.description || 'none'}</h5>

              <Button onClick={() => push(`/edit/user/${userId}`)}>Edit profile</Button>
          </S.Container>
};

const mapDispatchToProps = dispatch => bindActionCreators({
    push: push,
}, dispatch);
  
export default connect(
  null,
  mapDispatchToProps,
)(UserPage);