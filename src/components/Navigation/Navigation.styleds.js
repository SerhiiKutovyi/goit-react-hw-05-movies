import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  color: black;

  &.active {
    color: green;
  }
`;

export const StyledNav = styled.nav`
  margin-top: 20px;
  margin-bottom: 20px;

  border-bottom: 1px solid black;
  ul {
    display: flex;
    gap: 30px;

    margin-bottom: 20px;
    margin-left: 20px;
  }

  li {
    display: block;
  }
`;
