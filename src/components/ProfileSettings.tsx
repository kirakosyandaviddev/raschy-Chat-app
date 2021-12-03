import React from 'react';

import { UpdateProfileForm } from '.';
import { CloseIcon, SettingsIcon } from '../envairoment';
import {
    Button,
    ProfileSettingsBox,
    ProfileSettingsHeader,
} from './profileSettings.style';

interface ProfileSettingsProps {
    close: () => void
};

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ close }) => {
    return (
        <ProfileSettingsBox>
            <ProfileSettingsHeader>
                <SettingsIcon />
                Profile settings
                <Button>
                    <CloseIcon onClick={close} />
                </Button>
            </ProfileSettingsHeader>
            <UpdateProfileForm close={close} />
        </ProfileSettingsBox>
    );
};

