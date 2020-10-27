import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CoworkersObj, Pagination} from "../../types";
import {selectPagination} from "../../store/pagination/pagination.selectors";
import {selectCoworkers} from "../../store/coworker/coworker.selectors";
import {actionSetActivePage, actionSetNextPage, actionSetPrevPage} from '../../store/pagination/pagination.actions';

export interface PaginationLogicObj extends Pagination {
    goToFirstPage(): void;
    goToLastPage(): void;
    setPrevPage(): void;
    setNextPage(): void;
    isFirstPage: boolean;
    isLastPage: boolean;
}

const PaginationLogic = (): PaginationLogicObj => {
    const dispatch = useDispatch();
    const coworkers: CoworkersObj = useSelector(selectCoworkers);
    const { selectedPage, pages }: Pagination = useSelector(selectPagination);

    const goToFirstPage = () => {
        dispatch(actionSetActivePage(0));
    }

    const goToLastPage = () => {
        dispatch(actionSetActivePage(Object.keys(pages).length - 1));
    }

    const setPrevPage = () => {
        dispatch(actionSetPrevPage())
    }

    const setNextPage = () => {
        dispatch(actionSetNextPage())
    }

    const isFirstPage = selectedPage === 0;

    const isLastPage = selectedPage === Object.keys(pages).length - 1;

    return {
        goToFirstPage,
        goToLastPage,
        setPrevPage,
        setNextPage,
        isFirstPage,
        isLastPage,
        selectedPage,
        pages
    }
};

export default PaginationLogic;
