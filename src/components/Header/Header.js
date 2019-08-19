import React from 'react';
import { Link } from "react-router-dom";
import AddButton from './AddButton/AddButton';
import SearchInput from '../SearchInput/SearchInput';
import * as S from './styled';

const Header = () => (
    <>
      <S.Container>
        <S.Link to='/'>
          <S.Title>Users list</S.Title>
        </S.Link>
        <Link to='/form'>
          <AddButton />
        </Link>
        <SearchInput />
      </S.Container>
      <hr />
    </>
);

export default Header;
