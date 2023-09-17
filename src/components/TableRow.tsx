// CustomTableRow.tsx
import { TableCell, Avatar, Button } from '@mui/material';
import { User } from '../models/user';

export function TableRow(user: User, handleDelete: (id: string) => void) {
    return (
        <>
            <TableCell style={{ wordBreak: 'break-word' }}>
                {user?.id}
            </TableCell>
            <TableCell>{user?.isActive ? 'Yes' : 'No'}</TableCell>
            <TableCell><Avatar alt={user?.name} src={user?.picture} />
            </TableCell>
            <TableCell>{user?.age}</TableCell>
            <TableCell>{user?.name}</TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.address}</TableCell>
            <TableCell>{user?.about}</TableCell>
            <TableCell>{user?.registered.toString()}</TableCell>
            <TableCell>
                <Button variant='text'>
                    Edit
                </Button>
                <Button
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(user?.id)}
                >
                    Delete
                </Button>
            </TableCell>
        </>
    );
}