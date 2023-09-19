import { useEffect, useReducer } from "react";
import { UsersContext, UsersDispatchContext } from "./context";
import { getUsers } from "../../services/userService";
import { UsersTable } from "../../components/UsersTable";
import { usersReducer } from "./reducer";
import { ACTIONS } from "./actions";
import { initialState } from "./state";
import { EditUserDialog } from "../../components/EditUserDialog";

export default function Users() {
    const [state, dispatch] = useReducer(usersReducer, initialState);

    useEffect(() => {
      dispatch({type: ACTIONS.FETCH_USERS, payload: null});
      
      getUsers().then((users) => {
        dispatch({ type: ACTIONS.SUCCESS, payload: users });
      }).catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: error });
      });
    }, []);

    return (
        <UsersContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                <UsersTable />
                <EditUserDialog />
            </UsersDispatchContext.Provider>
        </UsersContext.Provider>
    );
}
