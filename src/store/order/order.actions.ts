import {Coworker, directions, ReduxState} from "../../types";
import {Dispatch} from "react";
import {order} from "./order.helpers";
import {actionSetActivePage, actionSetPages} from "../pagination/pagination.actions";

export const SET_ORDER: string = 'SET_ORDER';

export const actionOrderBy = (key: string, asc: directions = directions.ASC) => (dispatch: Dispatch<any>, getState: any) => {
    const { data }: ReduxState = getState();

    const orderedData = asc === directions.ASC
        ? Object.values(data).sort(order(key))
        : Object.values(data).sort(order(key)).reverse();

    dispatch(actionSetOrder(key, asc));
    dispatch(actionSetPages(orderedData));
    dispatch(actionSetActivePage(0));
};

export const actionSetOrder = (by: string, dir: directions) => (dispatch: Dispatch<any>) => dispatch({
    type: SET_ORDER,
    by,
    dir,
});
