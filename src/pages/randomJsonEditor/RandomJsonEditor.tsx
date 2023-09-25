// React imports
import { useEffect, useReducer } from "react";
// Context imports
import { EditorContext, EditorDispatchContext } from "./context";
// Service imports
import { getData } from "../../services/dataService";
// Component imports
import { EditorTable } from "./components/EditorTable";
import { EditDialog } from "./components/EditDialog";
// State imports
import { editorReducer } from "./state/reducer";
import { ACTIONS } from "./state/actions";
import { initialState } from "./state/state";

/**
 * React component that renders a list of data items.
 */
export default function RandomJsonEditor(): React.ReactElement {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  /**
  * Fetches the initial list of data.
  */
  useEffect(() => {
    dispatch({ type: ACTIONS.FETCH_DATA, payload: null });

    getData().then((data) => {
      // Dispatch an action to update the state with the fetched data.
      dispatch({ type: ACTIONS.SUCCESS, payload: data });
    }).catch((error) => {
      // Dispatch an action to update the state with the error.
      dispatch({ type: ACTIONS.ERROR, payload: error });
    });
  }, []);

  // Render the randomJsonEditor table and edit dialog.
  return (
    <EditorContext.Provider value={state}>
      <EditorDispatchContext.Provider value={dispatch}>
        <EditorTable />
        <EditDialog />
      </EditorDispatchContext.Provider>
    </EditorContext.Provider>
  );
}
