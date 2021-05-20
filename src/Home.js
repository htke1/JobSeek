import React from 'react'
import {Button} from '@material-ui/core/'
import Grid from '@material-ui/core/Grid';
import  './Home.css'
import Paper from '@material-ui/core/paper'
import { makeStyles } from '@material-ui/core/styles';
import IMG from './bgimage.png'
const useStyles = makeStyles((theme) => ({
    root: {
    paper: {
      height: 140,
      width: 100,
    },
   
  }
}));

function Home ()
{

    const classes = useStyles();
    return(
        <div className="bodyHome" style={{
          backgroundImage: 'url('+IMG+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}>
        <h1> Helping Job seeker and provider meet their end to end. </h1>
        <h3> Choose your role </h3><br/><br/>
        <Grid container spacing={2} className="employees">
        
        <Grid item xs={12} sm={6}>
        <Button  className="employees" variant="contained" color="primary" href="/Employee">
        Employee
        <Paper className={classes.paper} />
      </Button>
      </Grid>
      <Grid item xs={12} sm={6}  className="employers">
      <Button className="employers" variant="contained" color="primary" href="/Employer">
      Employer  
      </Button>
      </Grid>
      </Grid>
  
        </div>

    )
}

export default Home;