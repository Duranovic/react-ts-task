// React imports
import { Context, Dispatch, createContext } from "react";
// State imports
import { State, initialState } from "./state/state";
// Types imports
import { Action } from "../../types/action";

export const UsersContext: Context<State> = createContext<State>(initialState);
export const UsersDispatchContext: Context<Dispatch<Action>> = createContext<Dispatch<Action>>(null as unknown as Dispatch<Action>);