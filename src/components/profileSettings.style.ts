import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const ProfileSettingsBox = styled.div`
    max-width: 229px;
    width: 100%;
    margin-left: -322px;
    right: 0;
    padding: 52px 77px 20px 16px;
    z-index: 20;
    @media ${device.tablet} {
        max-width: 100%;
        position: absolute;
        padding: 10px;
        top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ProfileSettingsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 21px;
    font-weight: 500;
    color: ${baseTheme.white};
    margin-bottom: 55px;
    @media ${device.tablet} {
        margin-bottom: 15px;
        font-size: 18px;
        gap: 15px;
        display: flex;
    }
`;

export const Button = styled.div`
    cursor: pointer;
    @media ${device.tablet} {
        width: 15px;
        height: 15px;
    }
`;