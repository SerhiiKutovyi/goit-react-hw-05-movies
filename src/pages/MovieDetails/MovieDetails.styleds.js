import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Details = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px red;

  img {
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 10 px;
  }
`;

export const Additional = styled.ul`
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const StyledLinkBtn = styled(NavLink)`
  background-color: aqua;
  border: 1px solid tomato;
`;
