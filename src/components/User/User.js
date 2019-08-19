import React from 'react';
import * as S from './styled';
import { push } from 'connected-react-router';
import {bindActionCreators} from 'redux';
import { connect } from  'react-redux';


const User = (props) => {  
  const { firstName, lastName } = props.user;
  const { push, index } = props;

  const goToUserPage = (index) => push(`user/${index + 1}`);
  
  return ( 
    <S.Container onClick={goToUserPage.bind(null, index)}>
      {firstName} {lastName}
    </S.Container>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
	push: push,
}, dispatch);

export default connect(
	null,
	mapDispatchToProps,
)(User);