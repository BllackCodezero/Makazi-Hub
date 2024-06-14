import React from 'react';
import './Listings.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          disabled={i === currentPage}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
};

export default Pagination;