import React from "react";
import { PaginationStyle } from "./Pagination.style";

const Pagination = () => {
  return (
    <PaginationStyle aria-label="Character navigation list">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#a">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#a">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#a">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#a">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#a">
            Next
          </a>
        </li>
      </ul>
    </PaginationStyle>
  );
};

export default Pagination;
