import styled from "styled-components";

export const PaginationStyle = styled.nav`
  padding-top: 55px;

  ul {
    justify-content: center;

    .page-link {
      color: #f26f4a;
      border-color: #f26f4a;

      &:focus {
        box-shadow: 0 0 0 0.25rem rgb(253 113 13 / 25%);
      }
    }

    li:first-child,
    li:last-child {
      a {
        background-color: #f26f4a;
        color: #fff;
        width: 80.5px;
        text-align: center;
        transition: background-color 0.2s ease-in-out;

        &:hover {
          color: #fff;
          background-color: #e26c4a;
        }
      }
    }
  }
`;
