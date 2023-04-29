import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import FilterPanel from "./components/FilterPanel";
import Sidebar from "./components/Sidebar";
import Tracks from "./components/Tracks/Tracks";

function App() {
  return (
    <Box
      bgcolor="background.default"
      color="text.primary"
      sx={{ minHeight: "100%" }}
    >
      <Stack direction="row" sx={{ minHeight: "100%" }}>
        <Sidebar></Sidebar>
        <Tracks></Tracks>
        <FilterPanel></FilterPanel>
      </Stack>
    </Box>
  );
}

export default App;
