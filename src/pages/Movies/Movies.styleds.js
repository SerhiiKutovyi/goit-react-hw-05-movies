import styled from 'styled-components';

export const MoviesStyleds = styled.div`
  margin-left: 20px;

  form {
    margin-bottom: 20px;
  }

  ul {
    margin-left: 30px;
  }

  li {
    color: blue;
    margin-bottom: 5px;
  }

  button {
    padding: 0px 5px;
    margin-left: 20px;
    line-height: 30px;
    border-radius: 8px;
    border: none;

    text-decoration: none;

    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;
    background-color: gray;

    color: #ffffff;

    &:hover {
      background-color: coral;
    }
  }
`;
