// CustomTableRow.tsx
import { TableCell, Avatar, Button } from '@mui/material';
import { User } from '../models/user';
import dayjs from 'dayjs';

export function TableRow(user: User, handleDelete: (email: string) => void, handleEdit: (email: string) => void) {
    return (
        <>
            <TableCell style={{ wordBreak: 'break-word' }}>
                {user?.id}
            </TableCell>
            <TableCell>
                {user?.isActive ? 'True' : 'False'}
            </TableCell>
            <TableCell><Avatar alt={user?.name} src={user?.picture} />
            </TableCell>
            <TableCell>{user?.age}</TableCell>
            <TableCell>{user?.name}</TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.address}</TableCell>
            <TableCell>{user?.about}</TableCell>
            <TableCell>
                {dayjs(new Date(user?.registered)).toString()}
            </TableCell>
            <TableCell>
                <Button variant='text' onClick={() => handleEdit(user?.email)}>
                    Edit
                </Button>
                <Button
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(user?.email)}
                >
                    Delete
                </Button>
            </TableCell>
        </>
    );
}