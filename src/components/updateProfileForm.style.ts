import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const UpdateProfileFormContainer = styled.div`
    max-width: 232px;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${baseTheme.white};
    font-size: 14px;
    margin-bottom: 11px;
    @media ${device.tablet} {
        font-size: 12px;
        margin-bottom: 8px;
        margin-left: 5px;
    }
`;

export const Button = styled.button`
    height: 38px;
    color: ${baseTheme.black2};
    background-color: ${baseTheme.white};
    border: unset;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    transition: .1s;
    &:hover {
        background-color: ${baseTheme.lightGrey3};
    }
    @media ${device.tablet} {
        height: 26px;
        margin: 0 15px;
    }
`;

export const Input = styled.input`
    background-color: ${baseTheme.black2};
    border: none;
    border: 1px solid ${baseTheme.lightGrey6};
    border-radius: 8px;
    margin-bottom: 29px;
    height: 18px;
    padding: 8px 11px;
    color: ${baseTheme.darkGrey3};
    font-size: 15px;
    &:focus {
        border: 1px solid ${baseTheme.lightGrey7};
        outline: none;
    }
    @media ${device.tablet} {
        font-size: 12px;
        height: 14px;
        padding: 5px 7px;
        margin-bottom: 18px;
    }
`;

export const UploadLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 49px;
    @media ${device.tablet} {
        gap: 14px;
        margin-bottom: 22px;
        justify-content: space-around;
    }
`;

export const UploadButton = styled.div`
    background-color: ${baseTheme.black2};
    border: 1px solid ${baseTheme.lightGrey6};
    border-radius: 8px;
    max-width: 141px;
    width: 100%;
    height: 18px;
    padding: 8px 11px;
    color: ${baseTheme.darkGrey3};
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    transition: .1s;
    &:hover {
        background-color: ${baseTheme.darkGrey};
    }
    @media ${device.tablet} {
        font-size: 14px;
        max-width: 100px;
        height: 16px;
        padding: 7px 9px;
    }
`;