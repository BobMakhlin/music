import { Box } from "@mui/material";
import AudioPanel from "./components/AudioPanel/AudioPanel";
import FilterPanel from "./components/FilterPanel";
import Sidebar from "./components/Sidebar";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <Box
      bgcolor="background.main"
      color="text.primary"
      sx={{
        height: "100%",
        display: "grid",
        gridTemplateAreas: `"sidebar tracks rightbar"
      "audioplayer audioplayer audioplayer"`,
        gridTemplateColumns: "1fr 4fr 2fr",
        gridTemplateRows: "1fr auto",
      }}
    >
      <Sidebar />
      <Tracks />
      <FilterPanel />
      <AudioPanel />
    </Box>
  );
}

export default App;
