export interface ITablePaginationProps {
  prevPage: () => void;
  nextPage: () => void;
  goToPage: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
  itemsAmount: number;
  totalDataLength: number;
}
