import styled from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    color: palevioletred;
    border-radius: 3px;
    text-decoration: none;
    outline: none;

    :hover {
        color: white;
        background-color: palevioletred;
        cursor: pointer; 
    }
`;

export default Button;

