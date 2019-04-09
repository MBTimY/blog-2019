export interface PaginatorInterface {
  totalRow: number;
  pageSize: number;
  currentPage: number;
  pageSizeOption?: Array<any>;
}

export interface PaginatorApiInterface {
  offset: number;
  limit: number;
}
