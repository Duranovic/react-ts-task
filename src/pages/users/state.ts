import { User } from "../../models/user";

export const initialState: State = {
    users: [],
    selectedUser: undefined,
    error: undefined,
}

export type State = {
    users: User[];
    selectedUser?: User;
    error?: string;
};