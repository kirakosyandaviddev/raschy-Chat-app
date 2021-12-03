import styled from "styled-components";

import { device } from "../../consts";
import { baseTheme } from "../../theme/baseTheme";

export const MainRoomButtonContainer = styled.div`
    max-width: 232px;
    width: 100%;
    background-color: ${baseTheme.darkGrey2};
    border-radius: 8px;
    margin-bottom: 27px;
    cursor: pointer;
    transition: .3s;
    &:hover{
        background-color: ${baseTheme.darkGrey};
    }
    @media ${device.laptop} {
        margin-bottom: 16px;
    }
`;

export const MainRoomButtonBox = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 8px 9px 8px 12px;
    background-color: inherit;
    border: inherit;
    border-radius: 8px;
    cursor: pointer;
    color: ${baseTheme.darkGrey7};
    font-size: 12px;
    @media ${device.laptop} {
        padding: 6px 7px 6px 10px;
        font-size: 10px;
    }

`;

export const Title = styled.p`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: ${baseTheme.darkGrey3};
    margin-left: 9px;
    margin-right: 32px;
    @media ${device.laptop} {
        font-size: 12px;
    };
`;

export const Icon = styled.div``;
