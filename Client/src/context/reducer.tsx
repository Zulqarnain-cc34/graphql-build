import { UserAction, UserState } from "../types";
import * as actionTypes from "./actionsTypes";

const InitialState: UserState = {
    user: {
        id: 0,
        username: "",
        //email: "",
        //createdAt: '',
        //updatedAt: "",
    }
}

const reducer = (state: UserState = InitialState, action: UserAction) => {
    console.log("action :", action);
    console.log("state  :", state);

    console.log(action?.users)

    switch (action.type) {
        case actionTypes.GET_USER:
            return {
                ...state,
                users: action?.users,
            };

        case actionTypes.REMOVE_USER:
            return {
                ...state,
                user: null,
            };

        default:
            return state;
    }
};
export default reducer;
