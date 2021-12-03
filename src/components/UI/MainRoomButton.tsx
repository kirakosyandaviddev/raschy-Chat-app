import React from 'react';

import { LightningIcon } from '../../envairoment';
import { 
    MainRoomButtonBox, 
    MainRoomButtonContainer, 
    Title,
    Icon,
} from './mainRoomButton.style';

export const MainRoomButton: React.FC = () => {
    return (
        <MainRoomButtonContainer>
            <MainRoomButtonBox>
                <Icon>
                    <LightningIcon />
                </Icon>
                <Title>Main Room</Title>
                <span>4K User</span>
            </MainRoomButtonBox>
        </MainRoomButtonContainer>
    );
};

