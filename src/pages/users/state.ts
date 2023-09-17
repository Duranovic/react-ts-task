import { User } from "../../models/user";

export const initialState: State = {
    users: [],
    selectedUser: null,
    error: null,
}

export type State = {
    users: User[],
    selectedUser: User | null,
    error: string | null,
};