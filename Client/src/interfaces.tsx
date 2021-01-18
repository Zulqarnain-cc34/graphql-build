export interface UserState {
    id: number;
    username: string;
}

export interface RoomState {
    id: string;
    Roomname: string;
    createdAt?: string;
    updatedAt?: string;
    adminId: string;
    members: number;
}

export interface AppStateTypes {
    user?: UserState;
    room?: RoomState;
}

export interface IActionTypes {
    type: string;
    payload: AppStateTypes;
}

export interface FileTypes {
    data: any;
    name: string;
    size: number;
    type: string;
}
