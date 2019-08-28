import React from 'react';
import { Link } from "react-router-dom";
import AddButton from './AddButton/AddButton';
import SearchInput from '../SearchInput/SearchInput';
import * as S from './styled';
import SessionInfo from '../Header/SessionInfo/SessionInfo';

const Header = ({ session }) => {
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
            <SessionInfo session={session} />
          </>
        ) : null}
      </S.Container>
      <hr />
    </>
  )
};

export default Header;
