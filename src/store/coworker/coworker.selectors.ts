import {ReduxState} from "../../types";

export const selectCoworkers = ({ data: { coworkers }}: ReduxState) => coworkers;
export const selectFilteredCoworkers = ({ data: { filteredCoworkers }}: ReduxState) => filteredCoworkers;
