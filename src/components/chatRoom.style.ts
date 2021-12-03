import styled from "styled-components";

import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const ChatRoomContainer = styled.div`
    min-width: 500px;
    width: 100%;
    height: 100%;
    border: 0.5px solid rgba(45, 43, 43, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.tablet} {
        min-width: 300px;
    };
`;

export const ChatRoomHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 62px 23px 36px 36px;
    background-color: #0F0F13;
    border-bottom: 0.5px solid rgba(45, 43, 43, 0.3);
    @media ${device.laptopL} {
        padding: 24px 15px 20px 15px;
    };
    @media ${device.laptop} {
        padding: 20px 13px 18px 13px;
    };
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    @media ${device.laptop} {
        gap: 20px;
    };
`;

export const Title = styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 21px;
    font-weight: 500;
    color: ${baseTheme.white};
    @media ${device.laptop} {
        font-size: 18px;
    };
`;

export const RoomInfo = styled.div`
    color: ${baseTheme.darkGrey7};
    font-size: 12px;
`;

export const ChatRoomInputBox = styled.div`
    border-top: 0.5px solid rgba(45, 43, 43, 0.3);
    padding: 44px;
    @media ${device.laptopL} {
        padding: 22px;
    };
    @media ${device.laptop} {
        padding: 15px;
    };
`;

export const ChatRoomSessionContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const ChatRoomSession = styled.div`
    max-height: calc(100vh - 273px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    };
    @media ${device.laptopL} {
        max-height: calc(100vh - 175px);
    };
    @media ${device.laptop} {
        max-height: calc(100vh - 154px);
    };
    @media ${device.tablet} {
        max-height: calc(100vh - 202px);
    };
`;
