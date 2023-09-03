import { useState } from "react";

function usePagination(data: any[], itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      handlePageChange(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return {
    currentItems,
    currentPage,
    nextPage,
    prevPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
    goToPage: handlePageChange,
    totalDataLength:data.length
  };
}

export default usePagination;
