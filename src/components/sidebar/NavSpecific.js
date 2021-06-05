import React from 'react';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const NavList = styled.div`
    font-size: 2.1rem;
    .wrapper {
        padding: 12px;
        display: flex;
        border-radius: 999px;
        float: left;
        &:after{
            clear: both;
            content: "";
            display: block;
        }
        &:hover{
            color: var(--primary);
            background-color: rgb(29, 161, 242, 0.1);
        }
    }
    svg {
        font-size: 3.0rem;
    }
    &:after{
        clear: both;
        content: "";
        display: block;
    }
`;

const NavListLabel = styled.div `
    span {
        font-weight: bold;
        margin: auto 20px;
        display: inline;
    }
`;

export default function NavSpecific (props) {
    return (
        <NavList>
            <div className="wrapper">
                <Icon component={props.icon} />
                <NavListLabel>
                    <span>{props.label}</span>
                </NavListLabel>
            </div>
        </NavList>
    )
}