import React from 'react';
import {Coworker, CoworkersObj, Page, ReduxState} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {actionSetFilteredCoworkers} from "../../store/coworker/coworker.actions";
import {selectCoworkers } from "../../store/coworker/coworker.selectors";
import {selectFilteredCoworkers} from "../../store/pagination/pagination.selectors";

const FilterAreaLogic = () => {
    const dispatch = useDispatch();
    const coworkers: CoworkersObj = useSelector(selectCoworkers);
    const filteredCoworkers: Page = useSelector(selectFilteredCoworkers);

    //const orderByName = () => filteredCoworkers.map((coworker: Page): Page => coworker);

    const resetCoworkers = (): Coworker[] => Object.values(coworkers);

    const updateData = (func: () => string[]) => () => dispatch(actionSetFilteredCoworkers(func()));

    return {
        //orderByName: updateData(orderByName),
        //resetCoworkers: updateData(resetCoworkers)
    };
};
