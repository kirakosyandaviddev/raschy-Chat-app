import React from 'react';

import { MessageData } from '../types';
import { MoreVeritcalIcon, ReplyIcon, SmileIcon15 } from '../envairoment';
import { 
    Avatar, 
    Button, 
    CreatedData, 
    Message, 
    MessageBox, 
    MessageCardBox, 
    MessageCardContainer, 
    MoreButton, 
    MoreButtonBox, 
    ReplyMessageBox, 
    SenderName
} from './messageCard.style';

interface MessageCardProps {
    message: MessageData;
}

export const MessageCard: React.FC<MessageCardProps> = ({ message }) => {

    return (
        <MessageCardContainer>
            <MessageCardBox>
                <div>
                <Avatar color={message.user.avatar}>{message.user.username.toUpperCase().slice(0, 2)}</Avatar>
                </div>
                <MessageBox>
                    <SenderName>
                        {message.user.username}
                        <CreatedData>
                            {/* - {moment(new Date(message.created_at)).fromNow()} */}
                            - {message.created_at}
                        </CreatedData>
                    </SenderName>
                    <Message>
                        {message.text}
                        {
                            message.replyMessage &&
                            <ReplyMessageBox>
                                <SenderName>
                                    {message.replyMessage.user.username}
                                    <CreatedData>
                                        {/* - {moment(new Date(message.created_at)).fromNow()} */}
                                        - {message.replyMessage.created_at}
                                    </CreatedData>
                                </SenderName>
                                {message.replyMessage.text}
                            </ReplyMessageBox>
                        }
                    </Message>
                </MessageBox>
            </MessageCardBox>
            <MoreButtonBox>
                <MoreButton id="morebutton">
                    <Button>
                        <SmileIcon15 />
                    </Button>
                    <Button>
                        <ReplyIcon />
                    </Button>
                    <Button>
                        <MoreVeritcalIcon />
                    </Button>
                </MoreButton>
            </MoreButtonBox>
        </MessageCardContainer>
    )
}
