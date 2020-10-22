import React from 'react';
import {Coworker, CoworkersObj, ReduxState} from "../../types";
import {useDispatch, useSelector} from "react-redux";
import {actionSetFilteredCoworkers} from "../../store/coworker/coworker.actions";
import {selectCoworkers, selectFilteredCoworkers} from "../../store/coworker/coworker.selectors";

const FilterAreaLogic = () => {
    const dispatch = useDispatch();
    const coworkers: CoworkersObj = useSelector(selectCoworkers);
    const filteredCoworkers: Coworker[] = useSelector(selectFilteredCoworkers);

    const orderByName = () => filteredCoworkers.map((coworker: Coworker): Coworker => coworker);

    const resetCoworkers = (): Coworker[] => Object.values(coworkers);

    const updateData = (func: () => Coworker[]) => () => dispatch(actionSetFilteredCoworkers(func()));

    return {
        orderByName: updateData(orderByName),
        resetCoworkers: updateData(resetCoworkers)
    };
};
