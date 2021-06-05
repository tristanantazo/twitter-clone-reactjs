import React from 'react';
import styled from 'styled-components';
import Button from './../Button';
import {GifTwoTone, PhotoOutlined, PollOutlined, SentimentSatisfiedOutlined, CalendarToday} from '@material-ui/icons';

const TweetContainer = styled.div `
    padding: 15px;
    border-left: 1px solid #2f3336;
    border-right: 1px solid #2f3336;
    border-bottom: 1px solid #2f3336;
    display: flex;
    .right{
        width: 93%;
        padding-left: 20px;
    }
    img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }
`;

const InputStyled = styled.input `
    font-size: 2rem;
    background: transparent;
    border: none;
    min-height: 40px;
    color: var(--darkgray);
    font-weight: bold;
    width: 100%;
    margin-bottom: 5px;
    padding: 0px;
    :focus {
        outline: none;
    }
`;

const ControlsContainer = styled.div `
    button {
        font-size: 1.5rem;
        width: 77px;
        float: right;
    }
    &::after {
        clear: both;
        content: '';
        display: block;
    }
`;

const ControlsContainerIcon = styled.div `
    color: var(--primary);
    float: left;
    svg {
        font-size: 3.5rem;
        padding-right: 10px;
    }
`;

export default function TweetBox() {
    return (
        <TweetContainer>
            <img src="./a.jpg" alt="" />
            <div className="right">
                <InputStyled placeholder="What's on your mind?"/>
                <ControlsContainer>
                    <ControlsContainerIcon>
                        <PhotoOutlined />
                        <GifTwoTone />
                        <PollOutlined />
                        <SentimentSatisfiedOutlined />
                        <CalendarToday />
                    </ControlsContainerIcon>
                    <Button label="Tweet" primary />
                </ControlsContainer>
            </div>
        </TweetContainer>
    );
}