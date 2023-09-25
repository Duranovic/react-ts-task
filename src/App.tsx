// MUI imports
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// Custom CSS imports
import './App.css'
// Pages imports
import RandomJsonEditor from './pages/randomJsonEditor/RandomJsonEditor';

function App() {
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    {/* <Users /> */}
    <RandomJsonEditor />
  </LocalizationProvider>);
}

export default App;