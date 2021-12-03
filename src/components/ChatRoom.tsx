import React from 'react';

import { RoomChatInput } from '.';
import { FireIcon, HashtagBoldIcon } from '../envairoment';
import { baseTheme } from '../theme/baseTheme';
import { MessageCard } from './MessageCard';
import { MessageData } from '../types';
import { 
    TitleBox, 
    ChatRoomContainer, 
    ChatRoomHeader, 
    ChatRoomInputBox, 
    ChatRoomSession, 
    ChatRoomSessionContainer, 
    RoomInfo, 
    Title 
} from './chatRoom.style';

interface RoomProps {
    roomName: string;
    roomUsersCount: number;
    roomMessageSession?: MessageData[];
};

export const ChatRoom: React.FC<RoomProps> = ({
    roomName,
    roomUsersCount,
}) => {

    const roomMessageSession: MessageData[] = [
        {
            text: 'Nullam id dolor  id nibh ultricies vehicula  ut id elit. Lorem ipsum dolor sit amet , consectetureadispicing elit. Etiam porta sem malesuada magna mollliis euismod.',
            created_at: '12:49 pm',
            sender: '467',
            user: {
                avatar: baseTheme.green3,
                id: '467',
                username: 'Mixmaster930'
            },
        },
        {
            text: 'Nullam id dolor  id nibh ultricies vehicula  ut id elit. Lorem ipsum dolor sit amet , consectetureadispicing elit. Etiam porta sem malesuada magna mollliis euismod.',
            created_at: '12:49 pm',
            sender: '898',
            user: {
                avatar: baseTheme.orange,
                id: '898',
                username: 'Ladesslll'
            },
        },
        {
            text: 'Cras mattis consectetur  purus sit amet fermentum.  Aenean  lancia bibendum  nulla sed consectetur.',
            created_at: '12:49 pm',
            sender: '178',
            user: {
                avatar: baseTheme.purple,
                id: '178',
                username: 'MeFirow'
            },
            replyMessage: {
                text: 'Nullam id dolor  id nibh ultricies vehicula  ut id elit. Lorem ipsum dolor sit amet , consectetureadispicing elit. Etiam porta sem malesuada magna mollliis euismod.',
                created_at: '12:49 pm',
                sender: '898',
                user: {
                    avatar: baseTheme.orange,
                    id: '898',
                    username: 'Ladesslll'
                },
            }
        },
        {
            text: 'Nullam id dolor  id nibh ultricies vehicula  ut id elit. Lorem ipsum dolor sit amet , consectetureadispicing elit. Etiam porta sem malesuada magna mollliis euismod.',
            created_at: '12:49 pm',
            sender: '874',
            user: {
                avatar: baseTheme.green,
                id: '874',
                username: 'Base930ß23'
            },
        },
        {
            text: 'Hey all, I talked to @Mixmaster930 about our collaboration and we think it makes and we think it makes sense for thefirst step to concentraton on.',
            created_at: '12:49 pm',
            sender: '177',
            user: {
                avatar: baseTheme.green3,
                id: '177',
                username: 'NueslasI0'
            },
        },
        {
            text: 'Cras mattis consectetur  purus sit amet fermentum.  Aenean  lancia bibendum  nulla sed consectetur.',
            created_at: '12:49 pm',
            sender: '874',
            user: {
                avatar: baseTheme.red,
                id: '874',
                username: 'JeremyFirow'
            },
            replyMessage: {
                text: 'Nullam id dolor  id nibh ultricies vehicula  ut id elit. Lorem ipsum dolor sit amet , consectetureadispicing elit. Etiam porta sem malesuada magna mollliis euismod.',
                created_at: '12:49 pm',
                sender: '898',
                user: {
                    avatar: baseTheme.orange,
                    id: '898',
                    username: 'Ladesslll'
                },
            }
        },
    ];
    
    return (
        <ChatRoomContainer>
            <ChatRoomHeader>
                <TitleBox>
                    <HashtagBoldIcon />
                    <Title>
                        {roomName}
                        <FireIcon />
                    </Title>
                </TitleBox>
                {
                    roomUsersCount &&
                    <RoomInfo>
                        {roomUsersCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} People are here.
                    </RoomInfo>
                }
            </ChatRoomHeader>
            <ChatRoomSessionContainer>
                <ChatRoomSession>
                    {
                        roomMessageSession &&
                        roomMessageSession.map((message) => (
                            <MessageCard
                                message={message}
                            />
                        ))
                    }
                </ChatRoomSession>
            </ChatRoomSessionContainer>
            <ChatRoomInputBox>
                <RoomChatInput />
            </ChatRoomInputBox>
        </ChatRoomContainer>
    );
};


