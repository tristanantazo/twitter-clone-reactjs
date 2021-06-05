import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchContainer = styled.div `
    position: sticky;
    top: -0.5px;
    padding: 5px 0px;
    height: 56px;
    background-color: black;
    margin-bottom: 20px;
    z-index: 2;
`;

const SearchWrapper = styled.div `
    background-color: #202327;
    padding: 1.3em 1.5rem;
    display: flex;
    border-radius: 999px;
    svg {
        font-size: 2.1rem;
    }
`;

const InputStyled = styled.input `
    width: 100%;
    border: none;
    background: transparent;
    color: white;
    font-size: 1.7rem;
    margin-left: 10px;
    &:focus {
        outline: none;
    }
`;

export default function Search() {
    return (
        <SearchContainer>
            <SearchWrapper>
                <SearchIcon />
                <InputStyled />
            </SearchWrapper>
        </SearchContainer>
    )
}