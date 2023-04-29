import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import FilterPanel from "./components/FilterPanel";
import Sidebar from "./components/Sidebar";
import Tracks from "./components/Tracks/Tracks";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    // TODO: create a wrapper over ThemeProvider.
    <ThemeProvider theme={darkTheme}> 
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
    </ThemeProvider>
  );
}

export default App;
