import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const Title = styled.p`
    font-size: 13px;
    color: ${baseTheme.darkGrey4};
    margin-bottom: 22px;
    @media ${device.laptop} {
        font-size: 12px;    
        margin-bottom: 16px;
    }
`;

export const ChatGroupContainer = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    #navlink {
        text-decoration: none;
    };
    @media ${device.laptop} {
        gap: 10px;
    }
`;

export const RoomTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    transition: .1s;
    &:hover{
        opacity: 0.7;
    };
`;

export const RoomTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${baseTheme.lightGrey2};
    font-size: 15px;
    @media ${device.laptop} {
        font-size: 13px;
    }
`;

export const MissedIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 1px solid ${baseTheme.darkBlue};
    color: ${baseTheme.lightBlue};
    font-size: 14px;
    @media ${device.laptop} {
        width: 18px;
        height: 18px;
        font-size: 12px;
    }
`