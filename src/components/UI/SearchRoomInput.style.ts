import styled from "styled-components";

import { device } from "../../consts";
import { baseTheme } from "../../theme/baseTheme";

export const SearchInputContainer = styled.div`
    max-width: 232px;
    width: 100%;
    background-color:${baseTheme.darkGrey2};
    border-radius: 8px;
    margin-bottom: 24px;
    transition: .2s;
    &:hover{
        background-color: ${baseTheme.darkGrey};
    };
    @media ${device.laptop} {
        margin-bottom: 16px;
    };
`;

export const SearchInputBox = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 9px 9px 20px;
    @media ${device.laptop} {
        padding: 6px 6px 6px 12px;
    };
`;

export const Input = styled.input`
    color: ${baseTheme.lightGrey7};
    height: 17px;
    font-size: 14px;
    background-color: inherit;
    border: inherit;
    width: 100%;
    &:focus {
        outline: none;
    };
    @media ${device.laptop} {
        font-size: 12px;
    };
`;
