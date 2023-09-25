/**
 * The type of the application state.
 */
export type State = {
    data: any[];
    selected?: any;
    submitForm?: boolean;
    error?: string;
};

/**
 * The initial state of the application.
 */
export const initialState: State = {
    data: [],
    selected: undefined,
    submitForm: false,
    error: undefined,
}