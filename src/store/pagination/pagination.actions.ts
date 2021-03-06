import {Coworker, Page} from "../../types";
import {Dispatch} from "redux";
import {indexPages} from "./pagination.helpers";
import {applyLocationFilter, applySocialFilter} from "../../components/filterArea/filterArea.logic";
import {selectFilters} from "../filters/filters.selectors";

export const SET_ACTIVE_PAGE: string = 'SET_ACTIVE_PAGE';
export const SET_NEXT_PAGE: string = 'SET_NEXT_PAGE';
export const SET_PAGES: string = 'SET_PAGES';

export const actionSetPages = (data: Coworker[]) => (dispatch: Dispatch<any>, getState: any) => {
    const { office, contactLinks  } = selectFilters(getState());
    const dataWithLocationFilter = applyLocationFilter(data, office);
    const dataWithSocailFilter = applySocialFilter(dataWithLocationFilter, contactLinks);

    const indexedPages: Page = indexPages(dataWithSocailFilter.map(({ email }: Coworker) => email));

    return dispatch({
        type: SET_PAGES,
        pages: indexedPages
    })
}

export const actionSetActivePage = (activePage: number) => (dispatch: Dispatch<any>) => {
    return dispatch({
        type: SET_ACTIVE_PAGE,
        activePage,
    });
};

export const actionSetPrevPage = () => (dispatch: Dispatch<any>, getState: any) => {
    const { pagination: { selectedPage }} = getState();

    if (selectedPage > 0) {
        dispatch(actionSetActivePage(selectedPage-1));
    }
}

export const actionSetNextPage = () => (dispatch: Dispatch<any>, getState: any) => {
    const { pagination: { selectedPage, pages }} = getState();

    if ((selectedPage + 1) <= Object.keys(pages).length - 1) {
        dispatch(actionSetActivePage(selectedPage+1));
    }
}
