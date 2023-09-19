import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css'
import Users from './pages/users/Users';

function App() {
  return (<LocalizationProvider dateAdapter={AdapterDayjs}>
    <Users />
  </LocalizationProvider>);
}

export default App;