import initialState from '../initialState';
import {SET_ORDER} from "./order.actions";

export default function (state: any = initialState.order, action: any) {
    switch(action.type) {
        case SET_ORDER:
            return { ...state, by: action.by, dir: action.dir };

        default:
            return state;
    }
}
