import {SET_COWORKERS} from "./coworker.actions";
import initialState from '../initialState';
import {CoworkersObj} from "../../types";

export default function (state: CoworkersObj = initialState.data, action: any) {
    switch(action.type) {
        case SET_COWORKERS:
            return { ...state, ...action.data};

        default:
            return state;
    }
}
