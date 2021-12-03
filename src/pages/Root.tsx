import React from 'react'

import { AppLayout } from '../layout/AppLayout';
import { ChatRoom, RoomUsers } from '../components';
import { baseTheme } from '../theme/baseTheme';
import {
    RootContainer,
} from './root.style';

export const Root: React.FC = () => {

    return (
        <AppLayout>
            <RootContainer>
                <ChatRoom roomName={"Main room"} roomUsersCount={4239} />
            </RootContainer>
        </AppLayout>
    );
};

