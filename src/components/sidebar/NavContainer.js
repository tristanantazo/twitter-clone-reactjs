import React from 'react';
import styled from 'styled-components';
import NavSpecific from './NavSpecific';
import {    BookmarkOutlined, 
            Home, 
            ListAlt, 
            MailOutlineRounded, 
            MoreHorizSharp, 
            Explore,
            NotificationsNoneSharp, 
            PermIdentitySharp } from '@material-ui/icons';

const Nav = styled.div `
`;

export default function NavContainer () {
    const navigation = [
        {
            label: 'Home',
            icon: Home,
        },
        {
            label: 'Explore',
            icon: Explore,
        },
        {
            label: 'Notification',
            icon: NotificationsNoneSharp,
        },
        {
            label: 'Message',
            icon: MailOutlineRounded,
        },
        {
            label: 'Bookmarks',
            icon: BookmarkOutlined,
        },
        {
            label: 'Lists',
            icon: ListAlt,
        },
        {
            label: 'Profile',
            icon: PermIdentitySharp,
        },
        {
            label: 'More',
            icon: MoreHorizSharp,
        },
    ]
    function NavLists() {
        return navigation.map((e, k) => {
            return (
                <NavSpecific label={e.label} key={k} icon={e.icon}/>
            )
        })

    }

    return (
        <Nav>
            {NavLists()}
        </Nav>
    )
}