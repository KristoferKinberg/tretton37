import React from 'react';
import {Pagination} from "../../types";
import {useSelector} from "react-redux";
import {selectPagination} from "../../store/pagination/pagination.selectors";
import PaginationLogic, {PaginationLogicObj} from "./pagination.logic";
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import {StyledPageDisplayer, StyledPaginationButton, StyledPaginationWrapper} from "./pagination.styles";

const PaginationComponent = (): JSX.Element => {
    const {
        goToFirstPage,
        goToLastPage,
        setPrevPage,
        setNextPage,
        isFirstPage,
        isLastPage,
        selectedPage,
    }: PaginationLogicObj = PaginationLogic();

    const renderPrevButton = (): JSX.Element => <StyledPaginationButton disabled={isFirstPage} onClick={setPrevPage} >
        <FaAngleLeft/>
    </StyledPaginationButton>;

    const renderNextButton = (): JSX.Element => <StyledPaginationButton disabled={isLastPage} onClick={setNextPage} >
        <FaAngleRight/>
    </StyledPaginationButton>

    return <StyledPaginationWrapper>
        <StyledPaginationButton disabled={isFirstPage} onClick={goToFirstPage}>
            <FaAngleDoubleLeft/>
        </StyledPaginationButton>
            { renderPrevButton() }
        <StyledPageDisplayer>
            { selectedPage + 1 }
        </StyledPageDisplayer>
            { renderNextButton() }
        <StyledPaginationButton  disabled={isLastPage} onClick={goToLastPage}>
            <FaAngleDoubleRight/>
        </StyledPaginationButton>
    </StyledPaginationWrapper>
};

export default PaginationComponent;
