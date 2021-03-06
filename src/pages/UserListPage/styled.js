import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
   text-decoration: none; 
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
`;