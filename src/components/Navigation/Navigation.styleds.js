import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  color: black;

  &.active {
    color: coral;
  }
`;

export const StyledNav = styled.nav`
  margin-top: 20px;
  margin-left: 40px;
  margin-bottom: 20px;
  ul {
    display: flex;
    gap: 30px;
  }

  li {
    display: block;
  }
`;
