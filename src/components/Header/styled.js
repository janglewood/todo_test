import styled from 'styled-components';
import { Link as link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
export const Link = styled(link)`
  text-decoration: none;
`;
