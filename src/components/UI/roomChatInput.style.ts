import styled from "styled-components";

import { baseTheme } from "../../theme/baseTheme";

export const InputContainer = styled.div`
    width: 100%;
    background-color:rgba(51, 53, 57, 0.3);
    border-radius: 8px;
    transition: .2s;
    &:hover{
        background-color: ${baseTheme.darkGrey};
    };
`;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 16px 42px 12px 19px;
`;

export const Input = styled.input`
    color: ${baseTheme.lightGrey7};
    min-height: 24px;
    font-size: 16px;
    background-color: inherit;
    border: inherit;
    width: 100%;
    padding: 5px;
    &:focus {
        outline: none;
    };
`;

export const Button = styled.div`
    cursor: pointer;
`;