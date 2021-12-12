import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #7d858a;
  padding: 2px 58px 8px;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 17%);
  font-size: 37px;
  font-weight: 500;
  position: relative;
  height: 100px;
  text-align: center;
  border-bottom: #f26f4a 3px solid;
  padding-top: 30px;

  img {
    position: absolute;
    left: 58px;
    top: 2px;
    height: 90px;
    width: auto;
  }

  > div {
    height: 100%;
    display: flex;
    align-items: center;

    > div {
      color: #f6f6f6;
      flex: 0 0 100%;
    }
  }
`;
