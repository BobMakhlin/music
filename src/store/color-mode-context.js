import { createTheme, ThemeProvider } from "@mui/material";

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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1B1B1E",
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
});

const ColorModeProvider = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ColorModeProvider;
