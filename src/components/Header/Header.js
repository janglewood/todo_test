import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import AddButton from './AddButton/AddButton';
import SearchInput from '../SearchInput/SearchInput';
import * as S from './styled';
import SessionInfo from '../Header/SessionInfo/SessionInfo';
import { userLogout } from '../../actions';

const Header = ({ session }) => {
  const dispatch = useDispatch();
  return (
    <>
      <S.Container>
        <S.Link to='/'>
          <S.Title>Users list</S.Title>
        </S.Link>
        {session ? (
          <>
            {session.role === 'ADMIN' ? (
              <Link to='/form'>
                <AddButton />
              </Link>
            ) : null}
            <SearchInput />
            <button onClick={() => dispatch(userLogout())}>
              <SessionInfo session={session} />
            </button>
          </>
        ) : null}
      </S.Container>
      <hr />
    </>
  )
};

export default Header;
