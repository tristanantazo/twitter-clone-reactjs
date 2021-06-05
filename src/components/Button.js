import React from 'react';
import styled from 'styled-components'

const Button = styled.button `
    padding: 0.6em 1em;
    background-color: var(--primary);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    width: 80%;
    border-radius: 999px;
    &:hover {
        background-color: #1a8cd2;
    }
`;

export default function ButtonContainer (props) {
    return (
        <Button>{props.label}</Button>
    )
}