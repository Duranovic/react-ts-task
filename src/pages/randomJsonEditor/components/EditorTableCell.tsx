// React imports
import { ReactElement } from "react";
// Material UI imports
import { TableCell } from "@mui/material";
// Types imports
import { EditorTableCellProps } from "../../../types/propTypes";

/**
 * Renders a custom table cell based on the specified type and value.
 *
 * @param {EditorTableCellProps} props - The props containing the cell type and value.
 * @returns {ReactElement} A React element representing the custom table cell.
 */
export function EditorTableCell({ value }: EditorTableCellProps): ReactElement {
    return (
        <TableCell style={{ wordBreak: 'break-word' }}>
            {value?.toString()}
        </TableCell>
    )
}