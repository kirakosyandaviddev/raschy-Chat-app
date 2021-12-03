import React from 'react'
import { NavLink } from 'react-router-dom';

import { baseTheme } from '../theme/baseTheme';
import { 
    Avatar, 
    DirectMessagesContainer, 
    Title, 
    User, 
    UserName, 
    UsersContainer 
} from './directMessagesNav.style';

export const DirectMessagesNav: React.FC = () => {
    const users = [
        {
            username: 'Base930ß23',
            avatarColor: baseTheme.green,
        },
        {
            username: 'Ladesslll',
            avatarColor: baseTheme.orange,
        },
        {
            username: 'MeFirow',
            avatarColor: baseTheme.purple,
        },
        {
            username: 'Nueslasl0',
            avatarColor: baseTheme.green,
        },
    ];

    return (
        <DirectMessagesContainer>
            <Title>DIRECT MESSAGES</Title>
            <UsersContainer>
                {
                    users.map((user) => (
                        <NavLink to="/" id="navlink">
                            <User>
                                <Avatar color={user.avatarColor}>{user.username.toUpperCase().slice(0, 2)}</Avatar>
                                <UserName>{user.username}</UserName>
                            </User>
                        </NavLink>

                    ))
                }
            </UsersContainer>
        </DirectMessagesContainer>
    );
};
