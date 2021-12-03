import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const DirectMessagesContainer = styled.div`
    margin-bottom: 27px;
    @media ${device.laptop} {
    margin-bottom: 16px;
    };
`;

export const Title = styled.p`
    font-size: 13px;
    color: ${baseTheme.darkGrey4};
    margin-bottom: 22px;
    @media ${device.laptop} {
        margin-bottom: 16px;
        font-size: 12px;
    };
`;

export const UsersContainer = styled.div`
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    #navlink {
        text-decoration: none;
    };
    @media ${device.laptop} {
        gap: 10px;
    };
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    transition: .1s;
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
    color: ${baseTheme.black3};
    transition: .1s;
    @media ${device.laptop} {
        width: 24px;
        height: 24px;
        font-size: 9px;
    };
`;

export const UserName = styled.p`
    font-size: 15px;
    color: ${baseTheme.white};
    @media ${device.laptop} {
        font-size: 13px;
    };
`;