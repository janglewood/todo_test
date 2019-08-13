import React from 'react';
import { Link } from "react-router-dom";
import AddButton from './AddButton/AddButton';
import * as S from './styled';

const Header = () => (
    <S.Container>
        <S.Title>To Do list</S.Title>
        <Link to='/form'>
            <AddButton />
        </Link>
    </S.Container>
);

export default Header;
