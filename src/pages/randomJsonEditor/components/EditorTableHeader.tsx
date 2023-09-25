// React imports
import { ReactElement } from 'react';
// Material UI imports
import { TableRow, TableCell } from '@mui/material';

/**
 * Renders a table header row with column headers for item data and an "Actions" column.
 *
 * @returns {ReactElement} A React element representing the table header row.
 */
export function TableHeader(props: any): ReactElement {
  // Extract keys from formData or provide an empty object if formData is undefined
  const keys = Object.keys(props?.item ?? {});
  return (
    <TableRow>
      {keys.map((key: string) => (
        <TableCell key={key} variant='head' style={{ width: 90}}>
          {key}
        </TableCell>))}
      <TableCell variant='head' style={{ width: 100 }}>Actions</TableCell>
    </TableRow>
  );
}