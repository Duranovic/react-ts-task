// React imports
import { ReactElement, useContext } from "react";
import { TableComponents, TableVirtuoso } from "react-virtuoso";
// Material UI imports
import { Paper, Table } from "@mui/material";
// Context imports
import { UsersContext, UsersDispatchContext } from "../context";
// State imports
import { ACTIONS } from "../state/actions";
// Types imports
import { User } from "../../../types/user";
// Component imports
import { TableHeader } from "./UserTableHeader";
import { TableRow } from "./UserTableRow";

/**
 * Renders a table of users, providing options to delete or edit user entries.
 *
 * @returns {ReactElement} A React element representing the UsersTable.
 */
export function UsersTable(): ReactElement {
    // Get the state and dispatch function from context
    const state = useContext(UsersContext);
    const dispatch = useContext(UsersDispatchContext);

    /**
     * Handles the deletion of a user with the specified email.
     *
     * @param {User} user - The user to be deleted.
     */
    function handleDelete(user: User): void {
        dispatch({ type: ACTIONS.DELETE_USER, payload: user });
    };

    /**
     * Handles the selection of a user for editing based on the email.
     *
     * @param {User} user - The user to be edited.
     */
    function handleEdit(user: User): void {
        dispatch({ type: ACTIONS.SELECT_USER, payload: user });
    };

    /**
     * Components for the Virtuoso-powered table.
     */
    const VirtuosoTableComponents: TableComponents<User> = {
        Table: (props) => (
            <Table {...props} sx={{ borderCollapse: 'seperate', tableLayout: 'fixed' }} />
        ),
    };

    return (
        <Paper style={{ height: '90vh' }}>
            <TableVirtuoso
                data={state?.users}
                components={VirtuosoTableComponents}
                fixedHeaderContent={TableHeader}
                itemContent={(_, user) => {
                    return TableRow(user, handleDelete, handleEdit);
                }}
            />
        </Paper>
    );
}

