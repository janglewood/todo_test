import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/Button/styled';

const UserPage = ({ history, users, push }) => {
  const { params: { userId } } = history.match;
  const userData = users[userId - 1];
  return  <S.Container>
            <h3>Name: {`${userData.firstName} ${userData.lastName}`}</h3>
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