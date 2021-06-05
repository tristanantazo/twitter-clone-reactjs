import React from 'react';
import styled from 'styled-components';
import MoreHorizSharp from '@material-ui/icons/MoreHorizSharp';

const AccountContainer = styled.div `
    display: flex;
    background-color: rgb(29, 161, 242, 0.1);
    border-radius: 999px;
    padding: 10px 12px;
    /* width: 80%; */
`;

const AccountContainerImage = styled.div `
    flex: .8 1;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

const AccountContainerDetails = styled.div `
    flex: 2 1;
    font-size: 1.5rem;
    .AccountContainerDetails__name{
        font-weight: bold;
    }
    span {
        color: var(--lightgray);
    }
`;

const AccountContainerExpand = styled.div `
    flex: 1 1;
    text-align: center;
    padding: 5px 0px;
    svg {
        font-size: 2.5rem;
    }
`;

export default function Account() {
    return (
        <AccountContainer>
            <AccountContainerImage>
                <img src="./a.jpg" alt="" />
            </AccountContainerImage>
            <AccountContainerDetails>
                <p className="AccountContainerDetails__name">viieell oo</p>
                <span>@trstun</span>
            </AccountContainerDetails>
            <AccountContainerExpand>
                <MoreHorizSharp/>
            </AccountContainerExpand>
        </AccountContainer>
    )
}