import { TableComponents, TableVirtuoso } from "react-virtuoso";
import { User } from "../models/user";
import { Paper, Table } from "@mui/material";
import { TableRow } from "./TableRow";
import { TableHeader } from "./TableHeader";
import { UsersContext, UsersDispatchContext } from "../pages/users/context";
import { useContext } from "react";
import { ACTIONS } from "../pages/users/actions";

export function UsersTable() {
    const state = useContext(UsersContext);
    const dispatch = useContext(UsersDispatchContext);

    const handleDelete = async (id: string) => {
        dispatch({ type: ACTIONS.DELETE_USER, payload: id });
    };

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
                    return TableRow(user, handleDelete);
                }}
            />
        </Paper>
    );
}

