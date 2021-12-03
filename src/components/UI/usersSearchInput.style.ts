import styled from "styled-components";

import { device } from "../../consts";
import { baseTheme } from "../../theme/baseTheme";

export const SearchInputContainer = styled.div`
    max-width: 170px;
    width: 100%;
    background-color:${baseTheme.darkGrey2};
    border-radius: 20px;
    transition: .2s;
    &:hover{
        background-color: ${baseTheme.darkGrey};
    };
`;

export const SearchInputBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
    padding: 3px 15px 3px 11px;
    @media ${device.laptop} {
        gap: 4px;
        padding: 2px 10px 2px 8px;
    };
`;

export const Input = styled.input`
    color: ${baseTheme.lightGrey7};
    height: 26px;
    font-size: 14px;
    background-color: inherit;
    border: none;
    width: 100%;
    &:focus {
        outline: none;
    };
    @media ${device.laptop} {
        font-size: 12px;
        height: 20px;
    };
`;