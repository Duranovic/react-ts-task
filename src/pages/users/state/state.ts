// Type imports
import { User } from "../../../types/user";

/**
 * The initial state of the application.
 */
export const initialState: State = {
    users: [],
    selectedUser: undefined,
    submitForm: false,
    error: undefined,
}

/**
 * The initial state of a user.
 */
export const initialUserState: User = {
    id: undefined,
    isActive: false,
    picture: '',
    age: 0,
    name: '',
    email: '',
    address: '',
    about: '',
    registered: '',
};

/**
 * The type of the application state.
 */
export type State = {
    users: User[];
    selectedUser?: User;
    submitForm?: boolean;
    error?: string;
};