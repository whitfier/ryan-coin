import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = props => {
  const {
    totalPages,
    page,
    perPage,
    handlePaginationClick,
    handlePerPageUpdate
  } = props;

  return (
    <div className="Pagination">
      <button
        className="Pagination-button"
        disabled={page <= 1}
        onClick={() => handlePaginationClick("prev")}
      >
        &larr;
      </button>

      <span className="Pagination-info">
        Page <b>{page}</b> of <b>{totalPages}</b>
      </span>

      <button
        className="Pagination-button"
        disabled={page === totalPages}
        onClick={() => handlePaginationClick("next")}
      >
        &rarr;
      </button>

      <form>
        <label className="Pagination-info">Items per page: </label>
        <select
          className="Pagination-select"
          value={perPage}
          onChange={handlePerPageUpdate}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </form>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
};

export default Pagination;
