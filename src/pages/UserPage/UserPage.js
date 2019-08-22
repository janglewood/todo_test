import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/Button/styled';
import { getUserSaga } from '../../sagas/getUserSaga';
import { useSaga } from '../../hooks/useSaga';
import useUserSelectorHook from '../../hooks/useUserSelector';

const UserPage = ({ match, push }) => {
  const { params: { userId } } = match;
  useSaga(getUserSaga, [userId]);
  const userData = useUserSelectorHook(userId);
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