import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
Contact Us ! </Typography>
      <Typography variant="h5" component="div">
      Phone: +201023234542  / +2001101010010
      </Typography>
     
      <Typography variant="h5" component="div">
      land Line: 048/2091234
       </Typography>
       <Typography sx={{ mb: 1.5 }} color="text.secondary">
        land Line: 048/209121212
      </Typography>
     
    </CardContent>
  </React.Fragment>
);
const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
  Location: </Typography>
  <Typography variant="h5" component="div">
Faculty of Computers and Information,</Typography>
<Typography variant="h5" component="div">        
Shibin ElKoom,Menoufia.</Typography>
        <Typography variant="h5" component="div">
Egypt.
        </Typography>
        <Typography variant="body2">
          Bioinformatics Dept
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );

export default function OutlinedCard() {
  return (
    <div>
      <div className='contacttext'>
        Contact Us
      </div>
    
    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{card}</Card>
      <Card variant="outlined">{card2}</Card>

    </Box>
    </div>
  );
}
