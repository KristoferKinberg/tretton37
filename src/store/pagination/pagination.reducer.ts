import initialState from '../initialState';
import {ReduxState} from "../../types";
import {SET_ACTIVE_PAGE, SET_PAGES} from "./pagination.actions";

export default function (state: any = initialState.pagination, action: any) {
    switch(action.type) {
        case SET_ACTIVE_PAGE:
            return { ...state, selectedPage: action.activePage };

        case SET_PAGES:
            return { ...state, pages: action.pages};

        default:
            return state;
    }
}
