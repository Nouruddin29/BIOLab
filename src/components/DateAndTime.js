import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers";
import { Alert, Button, Card, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());

  const today = new Date();
  console.log(value);
  const distance = formatDistance(value, today);
  console.log(distance);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
       <div>
    
      
      <div className="formpage">
      <div className="text">
        <Typography variant="h3" component="div">
          Date and Time selection
        </Typography>
      </div>
        <div className="list">
     
          <Card variant="outlined">
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </div>
        <div className="welcome">
          <Card variant="outlined">
            <Alert severity="warning">
              Make sure to pick "Hour" and " Minutes"
            </Alert>
          </Card>
        </div>

        <div className="list">
          <Card variant="outlined">
            <StaticTimePicker
              ampm
              orientation="landscape"
              openTo="minutes"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Card>
        </div>
        </div>
       
        <div className="buttonn">
          <Button variant="outlined">
            <Link to={"/Form"}>Back</Link>
          </Button>
          <Button variant="contained" disableElevation>
            <Link to={"/Confirm"}>Next</Link>
          </Button>
        </div>
        </div>
    </LocalizationProvider>
  );
}
