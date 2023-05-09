import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const colors = {
  green: {
    0: "#99e2b4",
    100: "#88d4ab",
    200: "#78c6a3",
    300: "#67b99a",
    400: "#56ab91",
    500: "#469d89",
    600: "#358f80",
    700: "#248277",
    800: "#14746f",
    900: "#036666",
  },
};

const scrollStyles = {
  "*::-webkit-scrollbar": {
    width: "0.75em",
  },
  "*::-webkit-scrollbar-thumb": {
    background: "rgb(127, 132, 135, 0.3)",
  },
  "*::-webkit-scrollbar-thumb:hover": {
    background: "rgb(221, 221, 221, 0.3)",
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      main: "#1B1B1E",
      dark: "#000000",
    },
    primary: {
      main: colors.green[900],
    },
    secondary: {
      main: colors.green[400],
    },
    text: {
      primary: "#c6c6c6",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...scrollStyles,
      },
    },
  },
});

const DarkThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
