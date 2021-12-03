import React from 'react'

import { AppLayout } from '../layout/AppLayout';
import { ChatRoom } from '../components';
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

