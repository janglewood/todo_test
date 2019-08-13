import React from 'react';
import * as S from './styled';

const Task = (props) => {
	const { firstName, lastName } = props.value;
  return (
    <S.Container>{firstName} {lastName}</S.Container>
  )
}

export default Task;