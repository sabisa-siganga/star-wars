import styled from "styled-components";

export const CharacterContainer = styled.div`
  padding: 48px 15px 106px;
  max-width: 829px;
  margin: 0 auto;

  h1 {
    font-size: 33px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 33px;
    display: flex;
    align-items: center;

    span {
      margin-right: 13px;
    }
  }

  .col-right {
    border-right: 1px solid #c0bdbd;

    ul {
      padding-left: 0;
    }
  }

  > div:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const UlStyle = styled.ul`
  margin-bottom: 0;
  padding-top: 13px;
  padding-bottom: 10px;

  li {
    list-style-type: none;
    margin-bottom: 8px;
    display: flex;
  }
`;

export const DotStyle = styled.span`
  padding-left: 11px;
  display: flex;
  align-items: center;

  span {
    height: 16px;
    width: 16px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #000;
  }
`;

export const BackButton = styled.div`
  padding-top: 30px;
  padding-left: 67px;

  a {
    background-color: #f26f4a;
    text-decoration: none;
    color: #fff;
    box-shadow: 1px 1px 3px rgb(0 0 0 / 22%);
    padding: 10px 12px;
    border-radius: 4px;
    display: inline-block;
  }
`;
