// MUI imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// Custom CSS imports
import './App.css'
// Pages imports
import Users from './pages/users/Users';

function App() {
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Users />
  </LocalizationProvider>);
}

export default App;