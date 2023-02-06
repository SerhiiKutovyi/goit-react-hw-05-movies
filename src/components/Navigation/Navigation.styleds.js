import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-size: 24px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;

  color: black;

  &.active {
    color: coral;
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
