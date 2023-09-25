// React imports
import { ReactElement, useContext } from "react";
import { TableComponents, TableVirtuoso } from "react-virtuoso";
// Material UI imports
import { Paper, Table } from "@mui/material";
// Context imports
import { EditorContext, EditorDispatchContext } from "../context";
// State imports
import { ACTIONS } from "../state/actions";
// Types imports
import { User } from "../../../types/user";
// Component imports
import { TableHeader } from "./EditorTableHeader";
import { TableRow } from "./EditorTableRow";

/**
 * Renders a table of users, providing options to delete or edit user entries.
 *
 * @returns {ReactElement} A React element representing the UsersTable.
 */
export function EditorTable(): ReactElement {
    // Get the state and dispatch function from context
    const state = useContext(EditorContext);
    const dispatch = useContext(EditorDispatchContext);

    /**
     * Handles the deletion of a item with the specified email.
     *
     * @param {any} item - The item to be deleted.
     */
    function handleDelete(item: any): void {
        dispatch({ type: ACTIONS.DELETE, payload: item });
    };

    /**
     * Handles the selection of a item for editing based on the email.
     *
     * @param {any} item - The item to be edited.
     */
    function handleEdit(item: any): void {
        dispatch({ type: ACTIONS.SELECT, payload: item });
    };

    /**
     * Components for the Virtuoso-powered table.
     */
    const VirtuosoTableComponents: TableComponents<any> = {
        Table: (props) => (
            <Table {...props} sx={{ borderCollapse: 'seperate', tableLayout: 'fixed' }} />
        ),
    };

    return (
        <Paper style={{ height: '90vh' }}>
            <TableVirtuoso
                data={state?.data}
                components={VirtuosoTableComponents}
                fixedHeaderContent={TableHeader}
                itemContent={(_, item) => {
                    return TableRow(item, handleDelete, handleEdit);
                }}
            />
        </Paper>
    );
}

