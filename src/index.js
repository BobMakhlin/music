import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ColorModeProvider from "./store/color-mode-context";
import CurrentTrackProvider from "./store/track-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorModeProvider>
    <CurrentTrackProvider>
      <App />
    </CurrentTrackProvider>
  </ColorModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
