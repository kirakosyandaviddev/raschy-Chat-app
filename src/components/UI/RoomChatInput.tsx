import React from 'react';

import { SmileIcon24 } from '../../envairoment';
import { 
    Input, 
    InputBox, 
    InputContainer, 
    Button 
} from './roomChatInput.style';

export const RoomChatInput: React.FC = () => {
    return (
        <InputContainer>
            <InputBox>
                <Input placeholder="type Message" type="text" />
                <Button>
                    <SmileIcon24 />
                </Button>
            </InputBox>
        </InputContainer>
    );
};



