import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Button } from '@mui/material';
import { User } from './models/user';
import { getData } from './services/userService';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  const handleDelete = async (id: string) => {
    try {
      // Update the state by removing the deleted item
      setData((prevData) => prevData.filter((item: User) => item.id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="Users table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Picture</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">About</TableCell>
              <TableCell align="right">Registrered</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: User) => (
              <TableRow
                key={row.id}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.isActive ? 'Yes' : 'No'}</TableCell>
                <TableCell align="right"><Avatar alt={row.name} src={row.picture} />
                </TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.about}</TableCell>
                <TableCell align="right">{row.registered.toString()}</TableCell>
                <TableCell align="right">
                  <Button variant="text" color="primary">
                    Edit
                  </Button>
                  <Button variant="text" color="error" onClick={() => handleDelete(row.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
