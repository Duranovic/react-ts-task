import { Action } from "../../models/action";
import { User } from "../../models/user";
import { ACTIONS } from "./actions";
import { State } from "./state";


export function usersReducer(state: State, action: Action) {
    switch (action.type) {
        case ACTIONS.FETCH_USERS:
            return {
                ...state,
            };

        case ACTIONS.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: undefined,
            };

        case ACTIONS.DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user: User) => user.email !== action.payload),
                selectedUser: undefined,
                error: undefined,
            };

        case ACTIONS.SELECT_USER:
            return {
                ...state,
                selectedUser: state.users.find((user?: User) => user?.email === action.payload),
                error: undefined,
            };

        case ACTIONS.UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    return user.email === action.payload.email ? action.payload : user;
                }),
                selectedUser: undefined,
                error: undefined,
            };
        case ACTIONS.SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: undefined,
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
}