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
                error: null,
            };

        case ACTIONS.DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user: User) => user.id !== action.payload),
                selectedUser: null,
                error: null,
            };
        case ACTIONS.UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    return user.id === action.payload.id ? action.payload : user;
                }),
                selectedUser: null,
                error: null,
            };
        case ACTIONS.SUCCESS:
            return {
                ...state,
                users: action.payload,
                error: null,
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