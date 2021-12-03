import styled from "styled-components";
import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const Layout = styled.div`
    display: flex;
    min-height: 100vh;
    height: 100%;
    overflow-y: hidden;
    background-color: ${baseTheme.black2};
    @media ${device.tablet} {
        flex-direction: column;
    }
`;

export const SiderContainer = styled.div`
    max-width: 84px;
    width: 100%;
    background-color: ${baseTheme.darkGrey};
    padding: 38px 0 25px 0;
    z-index: 20;
    transition: .1s;
    @media ${device.laptopL} {
        max-width: 60px;
        padding: 16px 0 13px 0;
    }
    @media ${device.laptop} {
        max-width: 40px;
        min-width: 40px;
    }
    @media ${device.tablet} {
        padding: 10px 0 10px 0;
        max-width: 100%; 
    }
`;

export const SiderBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${device.tablet} {
        flex-direction: row;
        padding: 0 25px 0 15px;
    }
`;

export const ProfileIcon = styled.div`
    width: 36px;
    height: 36px;
    background-color: ${baseTheme.green};
    font-weight: 600;
    font-size: 12px;
    color: ${baseTheme.black3};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .1s;
    @media ${device.laptop} {
        width: 24px;
        height: 24px;
    }
`;

export const SiderBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const BackgroundBLur = styled.div`
    position: absolute;
    z-index: 10;
    background-color:rgba(15, 15, 19, 0.94);
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    cursor: pointer;
    transition: .1s;
    background-color: inherit;
    border: inherit;
    &:hover{
        opacity: 0.7;
    };
`

export const MenuButton = styled.div`
    display: none;
    transition: .1s;
    @media ${device.tablet} {
        flex-direction: row;
        gap: 15px;
        display: flex;
    }
`

export const DesktopChatMenu = styled.div`
    max-width: 268px;
    width: 100%;
    height: 100%;
    z-index: 20;
    @media ${device.tablet} {
        display: none;
    };
`

export const MobileChatMenu = styled.div`
    display: none;
    max-width: 268px;
    z-index: 20;
    position: absolute;
    top: 50px;
    height: calc(100vh - 50px);
    background-color: ${baseTheme.black2};
    @media ${device.tablet} {
        display: ${props => props.color};
    }
`

export const DesktopRoomUsers = styled.div`
    max-width: 274px;
    width: 100%;
    height: 100%;
    background-color: ${baseTheme.black2};
    border: 0.5px solid rgba(45, 43, 43, 0.3);
    display: flex;
    flex-direction: column;
    padding: 0 26px 0 30px;
    @media ${device.laptopL} {
        padding: 0 13px 0 15px;
    }
    @media ${device.laptop} {
        padding: 0 10px 0 12px;
    }
    @media ${device.tablet} {
        display: none;

    }
`
export const MobileRoomUsers = styled.div`
    display: none;
    position: absolute;
    top: 50px;
    right: 0;
    padding: 0 0 0 10px;
    height: calc(100vh - 50px);
    background-color: ${baseTheme.black2};
    @media ${device.tablet} {
        display: ${props => props.color};
    }
`

export const UsersButton = styled.div`
    display: none;
    width: 27px;
    height: 27px;
    @media ${device.tablet} {
        display: block;
    }
`

export const LogoIcon = styled.div`
    @media ${device.tablet} {
        margin-left: 85px;
    }
`