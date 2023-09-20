// React imports
import { ReactElement, useContext, useEffect, useState } from "react";
// UI component imports
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
// State management imports
import { UsersContext, UsersDispatchContext } from "../context";
import { ACTIONS } from "../state/actions";
// Custom component imports
import { UserEditForm } from "./EditUserForm";

/**
 * Renders a dialog for editing a user.
 *
 * @returns {ReactElement} A React element.
 */
export function EditUserDialog(): ReactElement {
    // Get the state and dispatch function from context
    const state = useContext(UsersContext);
    const dispatch = useContext(UsersDispatchContext);

    // State for managing dialog visibility
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Update isOpen when the selectedUser in context changes
    useEffect(() => {
        setIsOpen(state?.selectedUser !== undefined);
    }, [state?.selectedUser]);

    /**
     * Closes the user editing dialog and resets the selectedUser in the context.
     */
    function handleClose(): void {
        setIsOpen(false);
    };

    /**
     * Handles the action to save the form by dispatching a submit action.
     */
    function handleSave(): void {
        dispatch!({ type: ACTIONS.SUBMIT_FORM, payload: true});
    }

    return (
        <Dialog open={isOpen} >
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <UserEditForm />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSave}>Save</Button>
                <Button variant="outlined" color="error" onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
}