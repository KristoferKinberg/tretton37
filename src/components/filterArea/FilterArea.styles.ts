import styled from 'styled-components';

export const StyledFilterAreaContainer = styled.div`
    height: 30vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #cecece;
    align-items: center;
`;

export const StyledFilterAreaRow = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
`;

export const StyledFilterAreaRowHeader = styled.h5`
    margin: 0;
`;

export const StyledOrderContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledOrder = styled.div`
    padding: 10px;
    font-size: .8rem;
    text-transform: uppercase;
    color: #333;
    cursor: pointer;
    display: flex;
    
    &:hover {
        color: #777;
    }
`;

export interface Props {
    isActive: boolean;
}

export const StyledOrderText = styled.span<Props>`
    margin: 0;
    ${(isActive) => isActive 
        ? 'margin-right: 10px;' 
        : ''
    }
`;
