import {Dispatch} from "react";
import {Coworker, Filters, filters} from "../../types";
import {selectFilters} from "./filters.selectors";

export const SET_FILTER: string = 'SET_FILTER';

export const actionSetFilters = (data: Coworker[]) => (dispatch: Dispatch<any>) => {
    // @ts-ignore
    const officeData = [...new Set(data.map(({ office }: Coworker) => office))]
        .reduce((newObj, key) => ({ ...newObj, [key]: true }), {});

    dispatch({
        type: SET_FILTER,
        filter: filters.OFFICE,
        data: officeData
    });
    dispatch({
        type: SET_FILTER,
        filter: filters.CONTACT_LINKS,
        data: {
            gitHub: true,
            twitter: true,
            stackOverflow: true,
            linkedIn: true,
        }
    });
};

export const actionSetFilter = (filter: string, key: string) => (dispatch: Dispatch<any>, getState: any) => {
    const filters: Filters = selectFilters(getState());
    const data = {
    // @ts-ignore
        ...filters[filter],
    // @ts-ignore
        [key]: !filters[filter][key]
    }
    debugger;
    dispatch({
        type: SET_FILTER,
        filter,
        data
    });
};

