import styled from "styled-components";

export const SearchBarStyle = styled.div`
  width: 500px;
  position: relative;

  input {
    font-size: 15px;
    padding: 7px 15px;
    border-radius: 3px;
    border: none;
    max-width: 341px;
    width: 100%;
    height: 40px;
    outline: none;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 14px rgb(0 0 0 / 23%);
  margin-top: 6px;
  border-radius: 4px;
  padding: 15px 0;

  ul {
    padding-left: 0;
    margin-bottom: 0;

    li {
      list-style-type: none;

      a {
        display: block;
        font-size: 15px;
        text-decoration: none;
        padding: 8px 15px;
        color: #000;
        background-color: transparent;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: #eee;
        }
      }
    }
  }
`;
