// Action imports
import { Action } from "../../../types/action";
import { findItemByObject } from "../../../utils/arrayHelper";
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
                selected: state.data.find((item: any) => {
                    if(JSON.stringify(item) === JSON.stringify(action.payload)) {
                        return item;
                    }
                }),
                error: undefined,
            };

        case ACTIONS.UPDATE:
            return {
                ...state,
                data: state.data.map((item: any) => {
                    // If matches, return the updated item
                    if(JSON.stringify(item) === JSON.stringify(action.payload.originalItem)) {
                        return action.payload.updatedItem;
                    }
                    // If doesn't match, return the item
                    return item;
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