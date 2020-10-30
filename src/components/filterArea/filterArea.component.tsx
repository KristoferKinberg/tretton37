import React from 'react';
import {
    StyledFilterAreaContainer,
    StyledFilterAreaRow,
    StyledFilterAreaRowHeader, StyledFilterContainer,
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
        filters,
        updateFilter,
        ...funcs
    }: FilterAreaLogicFunc = FilterAreaLogic();

    const handleFilterClick = (filter: string, key: string) => () => updateFilter(filter, key);


    // @ts-ignore
    const renderFilterData = (filter: string) => Object.keys(filters[filter]).map((key: string) =>{
        // @ts-ignore
        const checked = filters[filter][key];

        return <div key={key}>
            <StyledOrderText isActive={true}>
                {splitAtCapital(key).join(' ')}
            </StyledOrderText>

            <input type="checkbox" checked={checked} onChange={handleFilterClick(filter, key)}/>
        </div>
    })

    const renderFilters = () => Object.keys(filters).map((key) =>
        <StyledOrderContainer key={key}>
            <StyledFilterContainer>
                <StyledFilterAreaRowHeader>
                    {splitAtCapital(key).join(' ')}
                </StyledFilterAreaRowHeader>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    { renderFilterData( key ) }
                </div>
            </StyledFilterContainer>
        </StyledOrderContainer>
    )

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

            { renderFilters() }
        </StyledFilterAreaRow>


    </StyledFilterAreaContainer>
};

export default FilterAreaComponent;
