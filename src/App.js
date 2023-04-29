import { Stack } from '@mui/material';
import FilterPanel from './components/FilterPanel';
import Sidebar from './components/Sidebar';
import Tracks from './components/Tracks';

function App() {
  return (
    <Stack direction="row">
      <Sidebar></Sidebar>
      <Tracks></Tracks>
      <FilterPanel></FilterPanel>
    </Stack>
  );
}

export default App;
