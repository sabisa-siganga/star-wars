import styled from "styled-components";

export const HomeContainer = styled.div``;

export const MainStyle = styled.main`
  padding: 45px 0 30px;
  position: relative;

  > div {
    max-width: 895px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
  }

  h3 {
    margin-bottom: 25px;
  }
`;

export const BGImage = styled.div`
  position: absolute !important;
  z-index: 0 !important;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100% !important;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
