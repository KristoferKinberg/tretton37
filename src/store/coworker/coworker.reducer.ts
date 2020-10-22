import {SET_COWORKERS, SET_FILTERED_COWORKERS} from "./coworker.actions";
import initialState from '../initialState';
import {ReduxState} from "../../types";

export default function (state: ReduxState = initialState, action: any) {
    switch(action.type) {
        case SET_COWORKERS:
            return { ...state, coworkers: action.data};

        case SET_FILTERED_COWORKERS:
            return { ...state, filteredCoworkers: action.data };

        default:
            return state;
    }
}
