import { Box } from "@mui/material";
import FilterPanel from "./components/FilterPanel";
import Sidebar from "./components/Sidebar";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <Box
      bgcolor="background.default"
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
      <Box sx={{ gridArea: "audioplayer", height: "100px" }} bgcolor="black">
      </Box>
    </Box>
  );
}

export default App;
