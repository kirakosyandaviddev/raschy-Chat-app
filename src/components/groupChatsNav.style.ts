import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const GroupChatsContainer = styled.div`
    margin-bottom: 27px;
    @media ${device.laptop} {
        margin-bottom: 16px;
    }
`;

export const Title = styled.p`
    font-size: 13px;
    color: ${baseTheme.darkGrey4};
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    @media ${device.laptop} {
        margin-bottom: 16px;
        font-size: 12px;
    }
`;

export const ChatGroupContainer = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    #navlink {
        text-decoration: none;
    };
    @media ${device.laptop} {
        gap: 12px;
    }
`;

export const ChatGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${baseTheme.white};
    font-size: 15px;
    &:hover{
        opacity: 0.7;
    };
    &:focus{
        opacity: 0.7;
    };
`;

export const Avatar = styled.div`
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: ${props => props.color};
    font-size: 10px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
    color: black;
    transition: .1s;
    @media ${device.laptop} {
        width: 24px;
        height: 24px;
        font-size: 9px;
    }
`;

export const UsersCount = styled.p`
    display: flex;
    align-items: center;
    font-size: 15px;
    color: ${baseTheme.white};
    transition: .1s;
    @media ${device.laptop} {
        width: 24px;
        height: 24px;
        font-size: 12px;
    };
`;

export const Button = styled.div`
    cursor: pointer;
    transition: .1s;
    &:hover{
        opacity: 0.7;
    };
    &:focus{
        opacity: 0.7;
    };
`;