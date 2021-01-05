import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { DispatchType, UserAction, UserState } from "../types";
import reducer from "./reducer";

export const store: Store<UserState, UserAction> & { dispatch: DispatchType } = createStore(reducer, applyMiddleware(thunk));

