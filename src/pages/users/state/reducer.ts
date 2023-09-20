// Model imports
import { User } from "../../../types/user";
// Action imports
import { Action } from "../../../types/action";
import { ACTIONS } from "./actions";
// State imports
import { State } from "./state";

/**
 * Reduces the users state based on the given action.
 *
 * @param state The current users state.
 * @param action The action to be reduced.
 * @returns The new users state.
 */

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
                users: state.users.filter((user: User) => {
                    // If Id is not defined, we are filtering user by email
                    if (action.payload.id !== undefined) {
                        return user.id !== action.payload.id;
                    } else {
                        return user.email !== action.payload.email;
                    }
                }),
                selectedUser: undefined,
                error: undefined,
            };

        case ACTIONS.SELECT_USER:
            return {
                ...state,
                selectedUser: state.users.find((user?: User) => {
                    if (action.payload.id !== undefined && user?.id === action.payload.id) {
                        // If action.payload.id is defined and matches the user's id, return this user.
                        return true;
                    } else if (user?.email === action.payload.email) {
                        // If either action.payload.id is not defined or there was no id match, check if email matches and return this user.
                        return true;
                    } else {
                        // If neither id nor email matches, continue searching for a matching user.
                        return false;
                    }
                }),
                error: undefined,
            };

        case ACTIONS.UPDATE_USER:
            return {
                ...state,
                users: state.users.map((user: User) => {
                    if (action.payload.id !== undefined && user.id === action.payload.id) {
                        // If action.payload.id is defined and matches the user's id, update the user.
                        return action.payload;
                    } else if (user.email === action.payload.email) {
                        // If action.payload.id is not defined or there is no id match, check if email matches and update the user.
                        return action.payload;
                    } else {
                        // If neither id nor email matches, keep the original user.
                        return user;
                    }
                }),
                selectedUser: undefined,
                error: undefined,
            };

        case ACTIONS.SUBMIT_FORM:
            return {
                ...state,
                submitForm: action.payload,
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