import initialState from '../initialState';
import {SET_FILTER} from "./filters.actions";

export default function (state: any = initialState.filters, action: any) {
    switch(action.type) {
        case SET_FILTER:
            return { ...state, [action.filter]: action.data
            };

        default:
            return state;
    }
}
