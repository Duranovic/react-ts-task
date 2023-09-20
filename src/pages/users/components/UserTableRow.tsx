// React imports
import { ReactElement } from "react";
import { TableCell, Button } from "@mui/material";
// Types imports
import { User, UserPropsTypes } from '../../../types/user';
// State imports
import { initialUserState } from '../state/state';
// Component imports
import { CustomTableCell } from './UserTableCell';

/**
 * Renders a table row for a user, displaying user data and providing options to edit or delete the user.
 *
 * @param {User} user - The user object containing user data.
 * @param {(user: User) => void} handleDelete - A function to handle user deletion.
 * @param {(user: User) => void} handleEdit - A function to handle user editing.
 * @returns {ReactElement} A React element representing the user table row.
 */
export function TableRow(user: User, handleDelete: (user: User) => void, handleEdit: (user: User) => void): ReactElement {
    // Extract keys from formData or provide an empty object if formData is undefined
    const keys = Object.keys(initialUserState);
    const userDataWithKeys: { [key: string]: any } = user as { [key: string]: any };

    return (<>
        {keys.map((key: string) => {
            const typeKey = key as keyof User;
            return <CustomTableCell key={key} type={UserPropsTypes[typeKey]} value={userDataWithKeys[key]} />
        })}
        <TableCell>
            <Button variant='text' onClick={() => handleEdit(user)}>
                Edit
            </Button>
            <Button
                variant="text"
                color="error"
                onClick={() => handleDelete(user)}
            >
                Delete
            </Button>
        </TableCell>
    </>
    )
}