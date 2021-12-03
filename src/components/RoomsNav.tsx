import React from 'react';
import { NavLink } from 'react-router-dom';

import { HashtagIcon } from '../envairoment';
import { 
    ChatGroupContainer, 
    Title, 
    MissedIcon, 
    RoomTitle, 
    RoomTitleBox 
} from './roomsNav.style';

export const RoomsNav: React.FC = () => {

    const rooms = [
        {
            roomName: 'Life',
            missed: 0,
        },
        {
            roomName: 'Music',
            missed: 0,
        },
        {
            roomName: 'Wiki',
            missed: 8,
        },
        {
            roomName: 'Random',
            missed: 0,
        }
    ]

    return (
        <div>
            <Title>Rooms</Title>
            <ChatGroupContainer>
                {
                    rooms.map((room) => (
                        <NavLink to="/" id="navlink">
                            <RoomTitleBox>
                                <RoomTitle>
                                    <HashtagIcon />
                                    {room.roomName}
                                </RoomTitle>
                                {
                                    room.missed > 0 &&
                                    <MissedIcon>
                                        {room.missed}
                                    </MissedIcon>
                                }
                            </RoomTitleBox>
                        </NavLink>
                    ))
                }
            </ChatGroupContainer>
        </div>
    );
};
