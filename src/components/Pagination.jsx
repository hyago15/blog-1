// src/components/Pagination.jsx

import React from "react";
import "./css/pagination.css";

const Pagination = ({ prevPage, nextPage, currentPage }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button className="btn-pagination-pp" onClick={prevPage}>
          Previous Page
        </button>
      )}
      <button className="btn-pagination-np" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
