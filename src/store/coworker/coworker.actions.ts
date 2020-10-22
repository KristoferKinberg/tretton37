import {Coworker, CoworkersObj} from "../../types";
import {Dispatch} from "react";
import axios from "axios";

export const SET_COWORKERS: string = 'SET_COWORKERS';
export const SET_FILTERED_COWORKERS: string = 'SET_FILTERED_COWORKERS';

export const actionFetchData = () => (dispatch: Dispatch<any>) => {
    axios.get('https://api.tretton37.com/ninjas').then(({ data }) => {
        dispatch(actionSetCoworkers(data));
    });
}

export const actionSetCoworkers = (data: Coworker[]) => (dispatch: Dispatch<any>) => {
    dispatch(actionSetFilteredCoworkers(data));
    return dispatch({
        type: SET_COWORKERS,
        data: data.reduce((formattedData: CoworkersObj, coworker: Coworker): CoworkersObj =>
            ({ ...formattedData, [coworker.email]: coworker }), {}),
    });
}

export const actionSetFilteredCoworkers = (data: Coworker[]) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_FILTERED_COWORKERS,
    data,
})
