import { Button } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import image from "./images/pic1.jpg";
import CardContent from "@mui/material/CardContent";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import two from "./images/two.jpg";
import one from "./images/manar.jpg";
import three from "./images/three.jpg";
import seven from "./images/pic.jpg";
import Contact from './Contact';

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const HomePage = () => {

  return (


  <div>
<div className="formpage">
      {/* App Bar */}
      <div className="welcometext">
      <React.Fragment>
          

          <CardContent>
      
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              {" "}
            </Typography>
            
            <Typography variant="h2" component="div">
      
              Welcome to BIO CODE Lab !{" "}
      
            </Typography>
            <Typography variant="h8" component="div" marginLeft={29}>
      
              Clinical and Bioinformatics lab{" "}
      
            </Typography>

          </CardContent>
        </React.Fragment>
      </div>

      <div className="welcome" margin={5}>
        <img src={image} />
      </div>

      <div className="text">
        <Typography variant="h3" component="div">
          Services
        </Typography>
      </div>
      {/* /list  of services */}
      <div className="list">
        <div>
          <Paper
            className="services-box serviceBox"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src={four} title="four" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      "Measuring the level of sugar in the blood using the
                      latest devices and the lowest prices."
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $100.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Paper
            className="services-box serviceBox"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src={two} title="two" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      "Using the best equipment to explore samples easily and
                      accuratelyUsing the best equipment to explore samples
                      easily and accurately"
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      ID: 1030119
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $210.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Paper
            className="services-box serviceBox"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src={five} title="five" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      "Ultra-high resolution tomography with the latest
                      equipment"
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      ID: 1030118
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $187.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Paper
            className="services-box serviceBox"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src={seven} title="seven" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                    "Modern DNA experiments to keep up with the latest
                    ways of curing"
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      ID: 1030128
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $500.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Paper
            className="services-box serviceBox"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src={three} title="three" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      "Ultra-high resolution tomography with the latest
                      equipment"
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      ID: 1030118
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $187.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>
          <Paper
            className="services-box serviceBox"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img src={one} title="one" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      "Ultra-high resolution tomography with the latest
                      equipment"
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      ID: 1030118
                    </Typography>
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $187.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>  
      </div>
</div>
<div className="text">
        <Typography variant="h3" component="div">
          Make Appointment
        </Typography>
      </div>
  <div className="homepagebutton">
  <div>
    <Button variant="contained" disableElevation marginLeft={30}>
      <Link to={"/Form"}>Make Appointment</Link>
    </Button>
  </div>
</div>
<div>
  <Contact></Contact>
</div>



</div>
  );
};

export default HomePage;
