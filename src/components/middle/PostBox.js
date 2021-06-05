import React from 'react';
import styled from 'styled-components';
import {    MoreHorizSharp,
            ChatBubbleOutlineRounded,
            AutorenewRounded,
            FavoriteBorderRounded,
            PublishRounded } from '@material-ui/icons';

const PostContainer = styled.div `
`;

const PostContainerWrapper = styled.div `
    min-height: 100px;
    padding: 15px;
    border-left: 1px solid #2f3336;
    border-right: 1px solid #2f3336;
    border-bottom: 1px solid #2f3336;
    display: flex;
`;

const ImageContainer = styled.div `
    img{
        height: 48px;
        width: 48px;
        border-radius: 999px;
    }
`;

const RightContainer = styled.div `
    flex: 1 1;
    margin-left: 20px;
    font-size: 1.8rem;
    .header {
        position: relative;
        .details {
            float: left;
            span{
                margin-right: 5px;
                &:first-child {
                    font-weight: bold;
                }
                &:nth-child(2) {
                    color: var(--lightgray);
                }
            }
        }
        .option{
            float: right;
            svg {
                font-size: 2.5rem;
                color: var(--lightgray);
            }
        }
        &::after {
            clear: both;
            content: '';
            display: block;
        }
    }
    .content {
        font-size: 1.75rem;
        margin-bottom: 10px;
    }
    .controlls {
        display: flex;
        color: var(--lightgray);
        font-size: 1.5rem;
        justify-content: space-evenly;
        .icon_wrapper {
            display: flex;
            svg {
                font-size: 1.9rem;
            }
            span {
                padding: 0px 10px;
            }
            &:first-child:hover, &:last-child:hover {
                color: var(--primary);
            }
            &:nth-child(2):hover {
                color: lime;
            }
            &:nth-child(3):hover {
                color: red;
            }
        }
    }  
`;

export default function PostBox() {
    return (
        <PostContainer>
            <PostContainerWrapper>
                <ImageContainer><img src="./a.jpg" alt="" /></ImageContainer>
                <RightContainer >
                    <div className="header">
                        <div className="details">
                            <span>viieell</span><span>@trstun</span>
                        </div>
                        <div className="option">
                            <MoreHorizSharp />
                        </div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, consectetur, suscipit neque ex quam in commodi nesciunt aspernatur soluta nostrum, nihil veniam enim illo et amet exercitationem adipisci iusto.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, consectetur, suscipit neque ex quam in commodi nesciunt aspernatur soluta nostrum, nihil veniam enim illo et amet exercitationem adipisci iusto.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, consectetur, suscipit neque ex quam in commodi nesciunt aspernatur soluta nostrum, nihil veniam enim illo et amet exercitationem adipisci iusto.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad, consectetur, suscipit neque ex quam in commodi nesciunt aspernatur soluta nostrum, nihil veniam enim illo et amet exercitationem adipisci iusto.</p>
                    </div>
                    <div className="controlls">
                        <div className="icon_wrapper">
                            <ChatBubbleOutlineRounded />
                        </div>
                        <div className="icon_wrapper">
                            <AutorenewRounded /><span>123</span>
                        </div>
                        <div className="icon_wrapper">
                            <FavoriteBorderRounded /><span>3452</span>
                        </div>
                        <div className="icon_wrapper">
                            <PublishRounded />
                        </div>
                    </div>
                </RightContainer>
            </PostContainerWrapper>
        </PostContainer>
    )
}