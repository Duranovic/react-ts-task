// React imports
import { useEffect, useReducer } from "react";
// Context imports
import { UsersContext, UsersDispatchContext } from "./context";
// Service imports
import { getUsers } from "../../services/userService";
// Component imports
import { UsersTable } from "./components/UserTable";
import { EditUserDialog } from "./components/EditUserDialog";
// State imports
import { usersReducer } from "./state/reducer";
import { ACTIONS } from "./state/actions";
import { initialState } from "./state/state";

/**
 * React component that renders a list of users.
 */
export default function Users(): React.ReactElement {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  /**
  * Fetches the initial list of users.
  */
  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_USERS, payload: null });

    getUsers().then((users) => {
      // Dispatch an action to update the state with the fetched users.
      dispatch({ type: ACTIONS.SUCCESS, payload: users });
    }).catch((error) => {
      // Dispatch an action to update the state with the error.
      dispatch({ type: ACTIONS.ERROR, payload: error });
    });
  }, []);

  // Render the users table and edit user dialog.
  return (
    <UsersContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        <UsersTable />
        <EditUserDialog />
      </UsersDispatchContext.Provider>
    </UsersContext.Provider>
  );
}
