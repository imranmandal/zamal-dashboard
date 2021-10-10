import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function StaticDatePicker({ variant, ...rest }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...rest}
        renderInput={(params) => (
          <TextField
            sx={{ marginTop: "20px" }}
            variant={variant}
            fullWidth
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
