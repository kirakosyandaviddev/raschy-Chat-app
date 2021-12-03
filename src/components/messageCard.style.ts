import styled from "styled-components";

import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const MessageCardContainer = styled.div`
    border-bottom: 0.5px solid rgba(45, 43, 43, 0.3);
    border-top: 0.5px solid rgba(45, 43, 43, 0.3);
    padding: 24px 36px;
    display: flex;
    justify-content: space-between;
    &:hover #morebutton {
        display: flex;
    };    
    &:hover {
        background-color: ${baseTheme.darkGrey};
    };
    &:focus{
        background-color: ${baseTheme.darkGrey};
    };
    @media ${device.laptopL} {
        padding: 12px 18px;
    }
    @media ${device.laptop} {
        padding: 8px 14px;
    }
`;

export const MessageCardBox = styled.div`
    display: flex;
    gap: 18px;
    max-width: 85%;
    @media ${device.laptop} {
        gap: 14px;
    }
`;

export const Avatar = styled.div`
    border-radius: 50%;
    width: 44px;
    height: 44px;
    background-color: ${props => props.color};
    font-size: 13px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media ${device.laptop} {
        width: 32px;
        height: 32px;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const MessageBox = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    @media ${device.laptop} {
        gap: 6px;
    }
`;

export const SenderName = styled.div`
    display: flex;
    gap: 4px;
    font-size: 15px;
    font-weight: 600;
    color: ${baseTheme.white};
    cursor: pointer;
    @media ${device.laptop} {
        font-size: 13px;
    }
`;

export const CreatedData = styled.div`
    color: ${baseTheme.lightGrey5};
    font-size: 13px;
    @media ${device.laptop} {
        display: flex;
        align-items: center;
        font-size: 11px;
    }
`;

export const Message = styled.div`
    font-size: 16px;
    color: ${baseTheme.lightGrey4};
    line-height: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    @media ${device.laptop} {
        font-size: 13px;
    }
`;

export const MoreButtonBox = styled.div`
    display: flex;
    align-items: center;
`;

export const MoreButton = styled.div`
    padding: 6px 10px 6px 6px;
    border-radius: 8px;
    background-color: ${baseTheme.black4};
    display: none;
    gap: 13px;
    height: min-content;
`;

export const ReplyMessageBox = styled.div`
    border-left: 6px ${baseTheme.green3} solid;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-left: 6px;
`;

export const Button = styled.div`
    cursor: pointer;
    min-width: 3px;
    width: 100%;
`;