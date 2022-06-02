import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const card = (
  <React.Fragment>
  </React.Fragment>
);
const card2 = (
    <React.Fragment>
     
    </React.Fragment>
  );

export default function OutlinedCard() {
  return (
    <div>
    <Box sx={{ minWidth: 200 }}>
        <Typography variant="h2" component="div" marginTop={2} marginBottom={2} marginLeft={50}>
        Appointment Confirmed </Typography>
        <Typography variant="h2" component="div" marginTop={3} marginLeft={70}  >
        Thank you! </Typography>

      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card2}</Card>

    </Box>

  <div className="homepagebutton">
  <div>
    <Button variant="contained" disableElevation marginLeft={30}>
      <Link to={"/Form"}>Make Another Appointment</Link>
    </Button>
  </div>
  </div>
</div>

  );
}
