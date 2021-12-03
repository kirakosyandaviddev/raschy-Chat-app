import styled from "styled-components";

import { device } from "../consts";
import { baseTheme } from "../theme/baseTheme";

export const ChatMenuBox = styled.div`
    padding: 49px 18px 18px 18px;
    background-color: ${baseTheme.black2};
    max-height: calc(100vh - 70px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    };
    #navlink {
        text-decoration: none;
    };
    @media ${device.laptop} {
        padding: 24px 9px 9px 9px;
        max-height: calc(100vh - 40px);
    };
    @media ${device.tablet} {
        padding: 24px 9px 9px 9px;
        max-height: calc(100vh - 83px);
    };
`;

export const Title = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: ${baseTheme.darkGrey4};
    margin-bottom: 19px;
    @media ${device.laptop} {
        margin-bottom: 14px;
        font-size: 12px;
    };
`;