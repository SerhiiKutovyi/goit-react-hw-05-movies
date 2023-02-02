import { StyledLink } from './Navigation.styleds';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledLink to="/" /> Home <StyledLink />
          <StyledLink to="movies" /> Movies <StyledLink />
        </li>
      </ul>
    </nav>
  );
};
