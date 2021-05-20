import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IMG from './image1.jpeg'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={IMG} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.data.JobTitle}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {props.data.JobDescription}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.data.City}
                </Typography>
              </Grid>
              <Typography variant="body2" gutterBottom>
                  CTC: {props.data.CTC}
                </Typography>   
              <Grid item>
                <Typography variant="body2"  color="primary" >
                  {props.data.NumberofOpenings}
                </Typography >
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">remote/online</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
