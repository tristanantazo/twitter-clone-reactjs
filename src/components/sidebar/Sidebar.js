import React from 'react';
import styled from 'styled-components';
import NavContainer from './NavContainer';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from './../Button';
import AccountContainer from './AccountContainer';

const SidebarContainer  = styled.div `
    width: 300px;
    padding: 12px;
`;

const TwitterIconContainer = styled.div `
    margin-bottom: 12px;
    svg {
        margin-left: 12px;
        font-size: 3.2rem;
    }
`;

const ButtonContainer = styled.div `
    font-size: 1rem;
`;

export default function Sidebar () {
    return (
        <SidebarContainer>
            <TwitterIconContainer>
                <TwitterIcon/>
            </TwitterIconContainer>
            <NavContainer/>
            <ButtonContainer>
                <Button label='Tweet' primary />
            </ButtonContainer>
            <AccountContainer />
        </SidebarContainer>
    )
}