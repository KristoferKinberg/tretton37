import {ReduxState} from "../types";

const initialState: ReduxState = {
    data: {},
    pagination: {
        pages: {},
        selectedPage: 0,
    }
};

export default initialState;
