export interface RoomUsersData{
    usersCount?: number;
    users: User[];
};

export interface User {
    username: string;
    avatar: string;
    status?: string;
    id: string;
};

export interface MessageData {
    id?: number;
    created_at: string;
    sender: string;
    text: string;
    user: User;
    replyMessage?: MessageData;
};