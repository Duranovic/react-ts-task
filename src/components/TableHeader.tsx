// TableHeader.tsx
import { TableRow, TableCell } from '@mui/material';

export function TableHeader() {
    return (
        <TableRow>
          <TableCell variant='head' style={{ width: 100, wordBreak: 'break-word' }}>Id</TableCell>
          <TableCell variant='head' style={{ width: 50 }}>Active</TableCell>
          <TableCell variant='head' style={{ width: 50 }}>Picture</TableCell>
          <TableCell variant='head' style={{ width: 50 }}>Age</TableCell>
          <TableCell variant='head' style={{ width: 100 }}>Name</TableCell>
          <TableCell variant='head' style={{ width: 150 }}>Email</TableCell>
          <TableCell variant='head' style={{ width: 100 }}>Address</TableCell>
          <TableCell variant='head' style={{ width: 100 }}>About</TableCell>
          <TableCell variant='head' style={{ width: 100 }}>Registrered</TableCell>
          <TableCell variant='head' style={{ width: 100 }}>Actions</TableCell>
        </TableRow>
      );
}