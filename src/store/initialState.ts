import {ReduxState} from "../types";

const initialState: ReduxState = {
    data: {},
    pagination: {
        pages: {},
        selectedPage: 0,
    },
    order: {
        by: null,
        dir: null,
    }
};

export default initialState;
