import { StyledLink } from './Navigation.styleds';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/" />
          Home
          <StyledLink />
        </li>
        <li>
          <StyledLink />
          Movies
          <StyledLink />
        </li>
      </ul>
    </nav>
  );
};
