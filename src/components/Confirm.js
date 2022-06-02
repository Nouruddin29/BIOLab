import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import dna2 from './images/dna2.gif';
import dna from './images/dna.gif';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import two from "./images/two.jpg";
import five from "./images/five.jpg";
import three from "./images/ten.jpg";
import seven from "./images/seven.jpg";


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export default function ComplexGrid() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  
  
  return (
    <div>
 <div className="text">
        <Typography variant="h3" component="div">
          Choose Service
        </Typography>
      </div>

    <div className='choosetext'>
    <Paper className='services-box serviceBox'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img src={dna} title="dna"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               "Identifying genetic defects by studying human DNA"
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
                ID: 1030155
              </Typography>
            </Grid>
            <Grid item>
             
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $1200.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper className='services-box serviceBox'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img src={dna2} title="dna2"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                 "Birth control by analyzing a person's DNA and identifying his offspring"
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030120
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $950.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper className='services-box serviceBox'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img src={five} title="five"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                 "X Rays for deeper check for the bones and organisms"
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030120
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $150.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper className='services-box serviceBox'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img src={two} title="two"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                 "Blood and samples tests "
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030120
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $50.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper className='services-box serviceBox'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img src={three} title="three"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                 "Chemical and Drug Tests"
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030120
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $100.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Paper className='services-box serviceBox'
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
           <Img src={seven} title="seven"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                 "Complete checkup"
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030120
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $600.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </div>



<div className='welcome'>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {['Identifying Genetics', 'Analyzing DNA', 'X-Ray', 'Blood Tests','Chemical Tests','Complete checkup'].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={` ${value }`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>

</div>
<div className='buttonn'>
<Button variant="outlined">
    <Link to= {'/DateAndTime'} >Back</Link>    
    </Button>
    <Button variant="contained" disableElevation>
    <Link to= {'/Message'} >Confirm Reservation</Link>    
    </Button>
  
  </div>
  </div>
  );
}



