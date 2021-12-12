import styled from "styled-components";

export const TileContainerStyle = styled.div`
  box-shadow: 0px 1px 25px rgb(0 0 0 / 19%);
  border-radius: 4px;
  padding: 30px 85px;
  background-color: #fff;

  > a:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;
