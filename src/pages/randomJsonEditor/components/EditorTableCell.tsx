// React imports
import { ReactElement } from "react";
// Material UI imports
import { Avatar, TableCell } from "@mui/material";
// Types imports
import { EditorTableCellProps } from "../../../types/propTypes";
// Third-party imports
import dayjs from "dayjs";

/**
 * Renders a custom table cell based on the specified type and value.
 *
 * @param {EditorTableCellProps} props - The props containing the cell type and value.
 * @returns {ReactElement} A React element representing the custom table cell.
 */
export function EditorTableCell({ type, value }: EditorTableCellProps): ReactElement {
    return (
        <TableCell style={{ wordBreak: 'break-word' }}>
            {SpecificTableCell(type, value)}
        </TableCell>
    )
}

/**
 * Renders a specific type of content within a table cell based on the type.
 *
 * @param {string} type - The type of content to display in the cell.
 * @param {string} value - The value to be displayed in the cell.
 * @returns {ReactElement} A React element representing the specific table cell content.
 */
function SpecificTableCell(type: string, value: string): ReactElement {
    switch (type) {
        case 'date':
            return <>{dayjs(new Date(value)).toString()}</>
        case 'boolean':
            return <>{value ? 'True' : 'False'}</>
        case 'image':
            return <Avatar src={value} />
        default:
            return <>{value}</>
    }
}
