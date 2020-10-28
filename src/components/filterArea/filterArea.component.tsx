import React from 'react';
import {
    StyledFilterAreaContainer,
    StyledFilterAreaRow,
    StyledFilterAreaRowHeader,
    StyledOrder,
    StyledOrderContainer, StyledOrderText
} from './FilterArea.styles';
import FilterAreaLogic, {FilterAreaLogicFunc, orderableKeys} from "./filterArea.logic";
import {directions} from "../../types";
import {capitalizeFirstLetter, splitAtCapital} from "../../helpers";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FilterAreaComponent = (): JSX.Element => {
    const {
        by,
        dir,
        ...funcs
    }: FilterAreaLogicFunc = FilterAreaLogic();

    const getChevron = (isActive: boolean) => {
        if (!isActive) return null;

        return dir === directions.ASC
            ? <FaChevronDown />
            : <FaChevronUp />;
    }

    const orderAble = () => orderableKeys.map((key: string) => {
        const direction = key === by ? directions.DES : directions.ASC;
        //@ts-ignore
        const func = funcs[`order${capitalizeFirstLetter(key)}By${direction}`];

        return <StyledOrder onClick={func} key={key}>
            <StyledOrderText isActive={key === by}>
                {splitAtCapital(key).join(' ')}
            </StyledOrderText>
            { getChevron(key === by)}
        </StyledOrder>
    });

    return <StyledFilterAreaContainer>
        <h4>Filters and Orders</h4>

        <StyledFilterAreaRow>
            <StyledFilterAreaRowHeader>
                Order by:
            </StyledFilterAreaRowHeader>

            <StyledOrderContainer>
                { orderAble() }
            </StyledOrderContainer>
        </StyledFilterAreaRow>


    </StyledFilterAreaContainer>
};

export default FilterAreaComponent;
