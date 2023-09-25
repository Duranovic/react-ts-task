// Action imports
import { Action } from "../../../types/action";
import { ACTIONS } from "./actions";
// State imports
import { State } from "./state";

/**
 * Reduces the editor state based on the given action.
 *
 * @param state The current editor state.
 * @param action The action to be reduced.
 * @returns The new editor state.
 */

export function editorReducer(state: State, action: Action) {
    switch (action.type) {
        case ACTIONS.FETCH_DATA:
            return {
                ...state,
            };

        case ACTIONS.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: undefined,
            };

        case ACTIONS.DELETE:
            return {
                ...state,
                data: state.data.filter((item: any) => {
                    // If Id is not defined, we are filtering item by email
                    if (action.payload.id !== undefined) {
                        return item.id !== action.payload.id;
                    } else {
                        return item.email !== action.payload.email;
                    }
                }),
                selected: undefined,
                error: undefined,
            };

        case ACTIONS.SELECT:
            return {
                ...state,
                selected: state.data.find((item?: any) => {
                    if (action.payload.id !== undefined && item?.id === action.payload.id) {
                        // If action.payload.id is defined and matches the item's id, return this item.
                        return true;
                    } else if (item?.email === action.payload.email) {
                        // If either action.payload.id is not defined or there was no id match, check if email matches and return this item.
                        return true;
                    } else {
                        // If neither id nor email matches, continue searching for a matching item.
                        return false;
                    }
                }),
                error: undefined,
            };

        case ACTIONS.UPDATE:
            return {
                ...state,
                data: state.data.map((item: any) => {
                    if (action.payload.id !== undefined && item.id === action.payload.id) {
                        // If action.payload.id is defined and matches the item's id, update the item.
                        return action.payload;
                    } else if (item.email === action.payload.email) {
                        // If action.payload.id is not defined or there is no id match, check if email matches and update the item.
                        return action.payload;
                    } else {
                        // If neither id nor email matches, keep the original item.
                        return item;
                    }
                }),
                selected: undefined,
                error: undefined,
            };

        case ACTIONS.SUBMIT:
            return {
                ...state,
                submitForm: action.payload,
            };
        case ACTIONS.SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: undefined,
            };
        case ACTIONS.ERROR:
            return {
                ...state,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
}