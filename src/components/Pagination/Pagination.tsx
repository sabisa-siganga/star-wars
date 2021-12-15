import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState/GlobalState";
import { PaginationStyle } from "./Pagination.style";

const Pagination = () => {
  const { characterList } = useContext(GlobalState).state;

  return (
    <PaginationStyle aria-label="Character navigation list">
      <ul className="pagination">
        <li className="page-item">
          <Link
            className="page-link"
            to={
              characterList.pagination.prev !== 0
                ? `/${characterList.pagination.prev}`
                : ""
            }
            onClick={(event) => {
              if (characterList.pagination.prev === 0) {
                return event.preventDefault();
              }
            }}
          >
            Previous
          </Link>
        </li>

        {Array.from({ length: characterList.pagination.totalPages }).map(
          (item, index) => {
            return (
              <li className="page-item" key={`pagination__${index}`}>
                <Link className="page-link" to={`/${index + 1}`}>
                  {index + 1}
                </Link>
              </li>
            );
          }
        )}
        <li className="page-item">
          <Link
            className="page-link"
            to={
              characterList.pagination.next !== 0
                ? `/${characterList.pagination.next}`
                : ""
            }
            onClick={(event) => {
              if (characterList.pagination.next === 0) {
                return event.preventDefault();
              }
            }}
          >
            Next
          </Link>
        </li>
      </ul>
    </PaginationStyle>
  );
};

export default Pagination;
