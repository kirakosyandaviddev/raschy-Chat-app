import React from 'react';

import { SearchIcon23 } from '../../envairoment';
import { 
    SearchInputBox, 
    SearchInputContainer, 
    Input 
} from './SearchRoomInput.style';

export const SearchRoomInput: React.FC = () => {
    return (
        <SearchInputContainer>
            <SearchInputBox>
                <SearchIcon23 />
                <Input placeholder="Search rooms" type="text" />
            </SearchInputBox>
        </SearchInputContainer>
    );
};

