// React imports
import { ReactElement, useContext, useEffect, useState } from "react";
// UI component imports
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// State management imports
import { EditorContext, EditorDispatchContext } from "../context";
import { ACTIONS } from "../state/actions";
// Custom component imports
import { EditForm } from "./EditForm";

/**
 * Renders a dialog for editing a user.
 *
 * @returns {ReactElement} A React element.
 */
export function EditDialog(): ReactElement {
    // Get the state and dispatch function from context
    const state = useContext(EditorContext);
    const dispatch = useContext(EditorDispatchContext);

    // State for managing dialog visibility
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Update isOpen when the selectedUser in context changes
    useEffect(() => {
        setIsOpen(state?.selected !== undefined);
    }, [state?.selected]);

    /**
     * Closes the user editing dialog and resets the selectedUser in the context.
     */
    function handleClose(): void {
        dispatch!({ type: ACTIONS.SELECT, payload: null});
        setIsOpen(false);
    };

    /**
     * Handles the action to save the form by dispatching a submit action.
     */
    function handleSave(): void {
        dispatch!({ type: ACTIONS.SUBMIT, payload: true});
    }

    return (
        <Dialog open={isOpen} >
            <DialogTitle>Edit Entry</DialogTitle>
            <DialogContent>
                <EditForm />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSave}>Save</Button>
                <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}