import React, { useState } from 'react'

import { Icon23, MenuIcon, NotificationIcon, UsersIcon } from '../envairoment';
import { ChatMenu, ProfileSettings, RoomUsers } from '../components';
import {
    BackgroundBLur,
    Layout,
    ProfileIcon,
    SiderBottom,
    SiderBox,
    SiderContainer,
    Button,
    MenuButton,
    DesktopChatMenu,
    MobileChatMenu,
    MobileRoomUsers,
    UsersButton,
    DesktopRoomUsers,
    LogoIcon,
} from './AppLayout.style';
import { baseTheme } from '../theme/baseTheme';

export const AppLayout: React.FC = ({ children }) => {
    const [showProfileSettings, setShowProfileSettings] = useState(false);
    const [showMenu, setShowMenu] = useState(false)
    const [showUsers, setShowUsers] = useState(false)

    const close = () => {
        setShowProfileSettings(false)
    };

    const showSider = (sider: string) => {
        if (sider === 'Menu') {
            setShowMenu(!showMenu)
            setShowUsers(false)
        } else {
            setShowUsers(!showUsers)
            setShowMenu(false)
        }

    }

    console.log(showUsers)

    const roomUsersData = [
        {
            username: 'Rashy',
            avatar: baseTheme.green,
            status: 'ADMIN',
            id: '165'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.yellow2,
            status: 'MODERATOR',
            id: '865'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple4,
            id: '169'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple5,
            id: '185'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.green4,
            id: '785'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.yellow2,
            id: '498'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple2,
            id: '517'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple4,
            id: '794'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple5,
            id: '236'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.green4,
            id: '859'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.yellow2,
            id: '125'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple2,
            id: '987'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple4,
            id: '723'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple5,
            id: '953'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.green4,
            id: '687'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.yellow2,
            id: '618'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple2,
            id: '681'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple4,
            id: '178'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple5,
            id: '978'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.green4,
            id: '568'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.yellow2,
            id: '325'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple2,
            id: '982'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple4,
            id: '298'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple5,
            id: '389'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.green4,
            id: '968'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.yellow2,
            id: '326'
        },
        {
            username: 'Jeremy Firow',
            avatar: baseTheme.purple2,
            id: '357'
        },
    ]

    return (
        <Layout>
            <SiderContainer>
                <SiderBox>
                    <MenuButton>
                        <Button
                            onClick={() => showSider('Menu')}
                        >
                                <MenuIcon />
                        </Button>
                    </MenuButton>
                    <Button>
                        <LogoIcon>
                            <Icon23 />
                        </LogoIcon>
                    </Button>
                    <SiderBottom>
                        <Button
                            onClick={() => showSider('Users')}
                        >
                            <UsersButton>
                                <UsersIcon />
                            </UsersButton>
                        </Button>
                        <Button>
                            <NotificationIcon />
                        </Button>
                        <Button>
                            <ProfileIcon onClick={() => setShowProfileSettings(!showProfileSettings)}>
                                JF
                            </ProfileIcon>
                        </Button>
                    </SiderBottom>
                </SiderBox>
            </SiderContainer>

            <MobileChatMenu color={`${showMenu ? 'flex' : 'none'}`}>
                <ChatMenu />
            </MobileChatMenu>

            <DesktopChatMenu>
                <ChatMenu />
            </DesktopChatMenu>
            {children}
            <MobileRoomUsers color={`${showUsers ? 'flex' : 'none'}`}>
                <RoomUsers roomUsersData={roomUsersData} />
            </MobileRoomUsers>

            <DesktopRoomUsers>
                <RoomUsers roomUsersData={roomUsersData} />
            </DesktopRoomUsers>
            {
                showProfileSettings &&
                <ProfileSettings close={close} />
            }
            {
                showProfileSettings &&
                <BackgroundBLur />
            }
        </Layout>
    );
};