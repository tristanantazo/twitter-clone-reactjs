import React from 'react';
import styled from 'styled-components';
import Flare from '@material-ui/icons/ScatterPlot';
import TweetBox from './TweetBox';
import PostBox from './PostBox';

const MiddleContainer  = styled.div `
    flex: 2 1;
`;

const Header = styled.div `
    position: sticky;
    top: -0.5px;
    padding: 15px;
    background-color: black;
    border-left: 1px solid #2f3336;
    border-right: 1px solid #2f3336;
    border-bottom: 1px solid #2f3336;
    font-weight: bold;
    font-size: 2.1rem;
    z-index: 1;
    svg {
        float: right;
        font-size: 3rem;
        color: var(--primary);
    }
`;

export default function Middle () {
    return (
        <MiddleContainer>
            <Header>
                Home
                <Flare />
            </Header>
            <TweetBox />
            <PostBox />
            <PostBox />
            <PostBox />
        </MiddleContainer>
    )
}