import { StyledLink } from './Navigation.styleds';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink />
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
