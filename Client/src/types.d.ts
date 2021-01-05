export type errorMap = { field: string; error: Record<string, string> };

interface UserObject {
    id: number;
    username: string;
    //email: string;
    //createdAt: string;
    //updatedAt: string;
}

type UserState = {
    user: UserObject;
};

type UserAction = {
    type: string;
    users: UserState[];
};

type DispatchType = (args: UserAction) => UserAction;
