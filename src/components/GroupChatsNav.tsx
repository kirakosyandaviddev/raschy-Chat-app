import React from 'react';
import { NavLink } from 'react-router-dom';

import { PlusIcon } from '../envairoment';
import { baseTheme } from '../theme/baseTheme';
import { 
    Avatar, 
    UsersCount, 
    Title, 
    ChatGroup, 
    ChatGroupContainer, 
    GroupChatsContainer, 
    Button 
} from './groupChatsNav.style';

export const GroupChatsNav: React.FC = () => {

    const groupChats = [
        {
            usersCount: 6,
            users: [
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.lightGrey3,
                },
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.lightGrey3,
                },
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.yellow,
                },
            ]
        },
        {
            usersCount: 24,
            users: [
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.green,
                },
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.lightGrey3,
                },
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.yellow,
                },
            ]
        },
        {
            usersCount: 13,
            users: [
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.green,
                },
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.lightGrey3,
                },
                {
                    username: 'Base930ß23',
                    avatarColor: baseTheme.yellow,
                },
            ]
        },
    ];

    return (
        <GroupChatsContainer>
            <Title>
                Group Chats
                <Button>
                    <PlusIcon />
                </Button>
            </Title>
            <ChatGroupContainer>
                {
                    groupChats.map((group) => (
                        <NavLink to="/" id="navlink">
                            <ChatGroup>
                                {
                                    group.users.slice(0, 3).map((user) => (
                                            <Avatar color={user.avatarColor}>{user.username.toUpperCase().slice(0, 2)}</Avatar>
                                    ))
                                }
                                <UsersCount>+{group.usersCount - 3}</UsersCount>
                            </ChatGroup>
                        </NavLink>

                    ))
                }
            </ChatGroupContainer>
        </GroupChatsContainer>
    );
};

