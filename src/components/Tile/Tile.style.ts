import { Link } from "react-router-dom";
import styled from "styled-components";

export const TileMainStyle = styled(Link)`
  background-color: #fff;
  padding: 15px 25px;
  display: flex;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const CharacterDetails = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

export const CharacterInfo = styled.div`
  font-size: 15px;
  flex-basis: 0;
  flex-grow: 1;
  color: #3d3d3d;
  max-width: 100%;

  h2 {
    font-size: 23px;
  }

  span {
    font-weight: 600;
  }
`;

export const MoreInfo = styled.div``;
