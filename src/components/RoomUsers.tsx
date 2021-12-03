import React, { useState } from 'react';

import { UsersSearchInput } from '.';
import { HashtagBoldIcon } from '../envairoment';
import { User } from '../types';
import {
    Avatar,
    RoomUsersBox,
    RoomUsersContainer,
    RoomUsersHeader,
    RoomUsersInputBox,
    TitleBox,
    UserCard,
    UserName,
    UsersBox,
    Text,
    UserStatus,
    Div,
} from './roomUsers.style';

interface RoomUsersProps {
    roomUsersData?: User[];
};

export const RoomUsers: React.FC<RoomUsersProps> = ({ roomUsersData }) => {

    const [value, setValue] = useState<string>('');

    const filterUsersData = (users: User[] | []) => {
        if (value.length > 0) {
            return (
                // eslint-disable-next-line
                users?.filter((user) => {
                    if (user.username.toLowerCase().includes(value.toLowerCase())) {
                        return user
                    }

                })
            )
        }
        return users
    }

    return (
        <RoomUsersContainer>
            <RoomUsersHeader>
                <TitleBox>
                    <HashtagBoldIcon />
                    User
                </TitleBox>
            </RoomUsersHeader>
            <RoomUsersBox>
                <RoomUsersInputBox>
                    <Text>MEMBERS</Text>
                    <UsersSearchInput setValue={setValue} />
                </RoomUsersInputBox>
                <UsersBox>
                    {   roomUsersData &&
                        filterUsersData(roomUsersData).length > 0 
                        ?
                        (
                            filterUsersData(roomUsersData).map((user) => (
                                <UserCard>
                                    <Div>
                                        <Avatar color={user.avatar}>{user.username.toUpperCase().slice(0, 2)}</Avatar>
                                    </Div>
                                    <UserName>
                                        {user.username}
                                        {
                                            user.status &&
                                            <UserStatus>
                                                {user.status}
                                            </UserStatus>
                                        }
                                    </UserName>
                                </UserCard>
                            ))  
                        )
                        :
                        (
                            <UserCard>
                                <Text>
                                    User with this name does not exist
                                </Text>
                            </UserCard>
                        )

                    }
                </UsersBox>
            </RoomUsersBox>
        </RoomUsersContainer>
    );
};

