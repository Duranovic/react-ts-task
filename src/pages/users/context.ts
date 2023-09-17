import { createContext } from "react";
import { State } from "./state";

export const UsersContext = createContext<State | null>(null);
export const UsersDispatchContext = createContext<any>(null);