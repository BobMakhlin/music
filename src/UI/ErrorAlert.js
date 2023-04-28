import { Alert, Button } from "@mui/material";
import React from "react";

function ErrorAlert({ content, onRetry }) {
  return (
    <Alert
      severity="error"
      action={
        <Button onClick={onRetry} color="inherit" size="small">
          Retry
        </Button>
      }
    >
      {content}
    </Alert>
  );
}

export default ErrorAlert;
