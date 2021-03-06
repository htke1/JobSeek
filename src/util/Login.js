import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Switch, Route} from 'react-router-dom'
import ViewJob from '../Employer/views_job'
import PostJob from '../Employer/post_a_job'
import {login} from '../Authcontext'
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [form,setForm] = useState({
    email:'',
    password:''
})
const handleLogin = async(e)=>{
    e.preventDefault();
    const res=await login(form);
    if(res.email!=null){
      if(window.location.pathname==="/Employer"){
      localStorage.setItem('email',res.email)
      localStorage.setItem('role',"Employer")
      history.push("/post_job")
    }
    else{
      localStorage.setItem('email',res.email)
      localStorage.setItem('role',"Employer")
      history.push("/available")
    }
  }
}


  return (
    
    <div>
    <Switch>
        <Route exact path="/views_job">
          <ViewJob/>
        </Route>
        <Route path="/post_job">
          <PostJob />
        </Route>
      </Switch>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate action={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth 
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => 
              setForm({...form, email: e.target.value})}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => 
              setForm({...form, password: e.target.value})}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleLogin}
        >
          Sign In
        </Button>
         
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    
    </div>
  );
}