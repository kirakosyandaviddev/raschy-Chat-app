import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const RoomUsersContainer = styled.div`
    background-color: ${baseTheme.black2};
`;

export const RoomUsersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 52px 0 37px 30px;
    @media ${device.laptopL} {
        padding: 26px 0 18px 15px;
    }
    @media ${device.laptop} {
        padding: 18px 0 14px 12px;
    }
`;

export const TitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 21px;
    font-weight: 500;
    color: ${baseTheme.white};
    @media ${device.laptop} {
        font-size: 18px;
        gap: 18px;
    }
`;

export const RoomUsersInputBox = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    margin-bottom: 16px;
    @media ${device.laptop} {
        gap: 14px;
        margin-bottom: 10px;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const RoomUsersBox = styled.div`
    padding: 0px 22px 0px 5px;
    @media ${device.laptop} {
        padding: 0px;
    }
`;

export const Text = styled.div`
    font-size: 14px;
    color: ${baseTheme.darkGrey4};
    font-weight: 500;
    @media ${device.laptop} {
        font-size: 12px;
        text-align: center;
    }
`;

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: .1s;
    &:hover{
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
    @media ${device.laptop} {
        width: 22px;
        height: 22px;
        font-size: 9px;
    }
`;

export const UserName = styled.p`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 15px;
    color: ${baseTheme.white};
    @media ${device.laptop} {
        font-size: 13px;
        gap: 8px;
    }
`;

export const UsersBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    height: calc(100vh - 190px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    };
    @media ${device.laptopL} {
        height: calc(100vh - 135px);
    }
    @media ${device.laptop} {
        gap: 14px;
        height: calc(100vh - 114px);
    }
    @media ${device.tablet} {
        padding: 24px 9px 9px 9px;
        max-height: calc(100vh - 195px);
    }
`;

export const UserStatus = styled.div`
    display: flex;
    align-items: center;
    background-color: ${baseTheme.black};
    border-radius: 8px;
    padding: 5px 9px;
    font-size: 13px;
    font-weight: 600;
    color: ${baseTheme.lightGrey8};
    @media ${device.laptop} {
        padding: 5px 6px;
        font-size: 10px;
    }
`;

export const Div = styled.div``