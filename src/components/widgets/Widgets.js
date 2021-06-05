import {React, useEffect} from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import {Settings, MoreHorizOutlined} from '@material-ui/icons';

const WidgetsContainer  = styled.div `
    flex: 1 1;
    padding: 0px 20px;
`;

const ScrollableWrapper = styled.div `
    position: sticky;
    overflow-y: auto;
    z-index: 1;
`;

const TrendsForYouContainer = styled.div `
    background-color: #202327;
    border-radius: 20px;
    .header {
        border-bottom: 1px solid #2f3336;
        padding: 1.5rem;
        display: flex;
        h1 {
            flex: 1 1;
        }
        svg {
            color: var(--primary);
            font-size: 2.3rem;
        }

    }
    .trendslist-container {
        .trendslist-wrapper{    
            border-bottom: 1px solid #2f3336;
            min-height: 85px;
            padding: 1.5rem;
            &:last-child{
                border: none;
            }
            .trendslist_header {
                display: flex;
                color: var(--darkgray);
                .category {
                    font-size: 1.3rem;
                    flex: 1 1;
                }
                svg {
                    font-size: 2.3rem;
                }
            }
            .tags {
                font-weight: bold;
                font-size: 1.4rem;
                margin-bottom: 5px;
            }
            .tweets {
                color: var(--darkgray);
                font-size: 1.3rem;
            }
        }
    }
`;

export default function Widgets () {
    useEffect(() => {
        const handleScroll = () => {
            console.log('asdfwef')
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <WidgetsContainer>
            <SearchBar />
            <ScrollableWrapper>
                <TrendsForYouContainer>
                    <div className="header">
                        <h1>Trends For You</h1> 
                        <div className="icon-container">
                            <Settings />
                        </div>
                    </div>
                    <div className="trendslist-container">
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                    </div>
                    <div className="trendslist-container">
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                        <div className="trendslist-wrapper">
                            <div className="trendslist_header">
                                <div className="category">
                                    <span>Music</span>
                                </div>
                                <div className="option">
                                    <MoreHorizOutlined />
                                </div>
                            </div>
                            <div className="tags">
                                <span>DALLAS</span>
                            </div>
                            <div className="tweets">
                                <span>24k Tweets</span>
                            </div>
                        </div>
                    </div>
                </TrendsForYouContainer>
            </ScrollableWrapper>
        </WidgetsContainer>
    )
}