import React from 'react';

import { SearchIcon16 } from '../../envairoment';
import { Input, SearchInputBox, SearchInputContainer } from './usersSearchInput.style';

interface UsersSearchInputProps {
    setValue: (e: string) => void
};

export const UsersSearchInput: React.FC<UsersSearchInputProps> = ({setValue}) => {
    return (
        <SearchInputContainer>
            <SearchInputBox>
                <Input placeholder="Search user" type="text" onChange={(e) => setValue(e.target.value)} />
                <SearchIcon16 />
            </SearchInputBox>
        </SearchInputContainer>
    );
};