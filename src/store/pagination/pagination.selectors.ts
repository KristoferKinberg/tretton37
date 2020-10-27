import {Coworker, Page, ReduxState} from '../../types';

export const selectPagination = ({ pagination }: ReduxState) => pagination;

export const selectFilteredCoworkers = ({ pagination: { pages }}: ReduxState): Page => pages;

export const selectPage = ({ pagination: { selectedPage, pages }, data }: ReduxState): Coworker[] =>
    pages[selectedPage] && data
        ? pages?.[selectedPage].map(id => data[id])
        : [];
