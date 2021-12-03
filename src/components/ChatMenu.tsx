import React from 'react';
import { NavLink } from 'react-router-dom';

import { DirectMessagesNav, GroupChatsNav, MainRoomButton, SearchRoomInput, RoomsNav } from '.';
import {
    Title,
    ChatMenuBox,
} from './chatMenu.style';

export const ChatMenu: React.FC = () => {
    return (
        <div>
            <ChatMenuBox>
                <SearchRoomInput />
                <Title>MAIN ROOM</Title>
                <NavLink to='/' id="navlink">
                    <MainRoomButton />
                </NavLink>
                <DirectMessagesNav />
                <GroupChatsNav />
                <RoomsNav />
            </ChatMenuBox>
        </div>
    );
};

