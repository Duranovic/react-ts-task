// React imports
import { ReactElement } from "react";
import { TableCell, Button } from "@mui/material";
// Component imports
import { EditorTableCell } from './EditorTableCell';

/**
 * Renders a table row for a item, displaying item data and providing options to edit or delete the item.
 *
 * @param {any} item - The item object containing item data.
 * @param {(item: any) => void} handleDelete - A function to handle item deletion.
 * @param {(item: any) => void} handleEdit - A function to handle item editing.
 * @returns {ReactElement} A React element representing the item table row.
 */
export function TableRow(item: any, handleDelete: (item: any) => void, handleEdit: (item: any) => void): ReactElement {
    // Extract keys from formData or provide an empty object if formData is undefined
    const keys = Object.keys(item);
    const userDataWithKeys: { [key: string]: any } = item as { [key: string]: any };

    return (<>
        {keys.map((key: string) => {
            return <EditorTableCell key={key} type={key} value={userDataWithKeys[key]} />
        })}
        <TableCell>
            <Button variant='text' onClick={() => handleEdit(item)}>
                Edit
            </Button>
            <Button
                variant="text"
                color="error"
                onClick={() => handleDelete(item)}
            >
                Delete
            </Button>
        </TableCell>
    </>
    )
}