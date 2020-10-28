import {Coworker, CoworkersObj} from "../../types";
import {Dispatch} from "react";
import axios from "axios";
import {actionSetPages} from "../pagination/pagination.actions";
import {actionSetFilters} from "../filters/filters.actions";

export const SET_COWORKERS: string = 'SET_COWORKERS';
export const SET_FILTERED_COWORKERS: string = 'SET_FILTERED_COWORKERS';

export const actionFetchData = () => (dispatch: Dispatch<any>) => {
    axios.get('https://api.tretton37.com/ninjas').then(({ data }) => {
        dispatch(actionSetFilters(data));
        dispatch(actionSetCoworkers(data));
        dispatch(actionSetPages(data));
    });
}

export const actionSetCoworkers = (data: Coworker[]) => (dispatch: Dispatch<any>) => {
    const formattedCoworkers = data.reduce((formattedData: CoworkersObj, coworker: Coworker): CoworkersObj =>
            ({ ...formattedData, [coworker.email]: coworker }), {});

    return dispatch({
        type: SET_COWORKERS,
        data: formattedCoworkers
    });
}

export const actionSetFilteredCoworkers = (data: String[]) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_FILTERED_COWORKERS,
    data,
})
