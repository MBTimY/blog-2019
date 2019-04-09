import {PaginatorInterface} from '../interface/paginator.interface';

export const PaginatorConst: PaginatorInterface = {
    // 当前默认页数
    currentPage: 1,
    // 当前每页条数
    pageSize: 10,
    // 可选择的每页条数
    pageSizeOption: [10, 20, 30],
    // 总条数
    totalRow: 0,
};
