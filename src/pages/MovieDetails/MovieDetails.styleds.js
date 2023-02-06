import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Details = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px black;

  img {
    min-width: 200px;
  }
  h2 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
  h3 {
    margin-bottom: 5px;
  }
`;

export const Additional = styled.ul`
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 10px;

  p {
    margin-bottom: 10px;
  }
`;

export const StyledLinkBtn = styled(NavLink)`
  padding: 0px 5px;
  margin-left: 20px;
  line-height: 30px;
  border-radius: 8px;

  text-decoration: none;

  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  background-color: rgba(0, 0, 0, 0.3);

  color: #ffffff;

  &:hover {
    background-color: coral;
  }
`;

export const ImgDiv = styled.div`
  margin-bottom: 10px;
`;
