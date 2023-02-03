import { StyledLink, StyledNav } from './Navigation.styleds';

export const Navigation = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <StyledLink to="/">Home </StyledLink>
        </li>
        <li>
          <StyledLink to="movies">Movies</StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
};
