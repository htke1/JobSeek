import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import {useState} from 'react'
import {uploadResume} from '../../Authcontext'
import NavBar from './NavBar'
function Form ()
{
    const [form,setForm] = useState({
        Name:'',
        email:'',
        PhoneNumber:'',
        resume:[],
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await uploadResume(form);
        console.log(form);
    }
    
    return(
        <div>
        <NavBar/>
        <Container  maxWidth="xs">
        <center> <h4 >Fill the form and apply.</h4></center>
       
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name
                  " name="Name
                    " size="small" required variant="outlined"
                    onChange={(e) => 
                        setForm({...form, Name: e.target.value})} />
                </Grid>
              
            <Grid item xs={12}>
              <TextField fullWidth label="email
              " name="email
                " size="small" required variant="outlined" 
                onChange={(e) => 
                    setForm({...form, email: e.target.value})} 
                />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="PhoneNumber" name="PhoneNumber" size="small" required variant="outlined" onChange={(e) => 
                setForm({...form, PhoneNumber: e.target.value})} />
            </Grid>
            <Grid item xs={12}>
              <input type="file" fullWidth label="resume" name="resume" size="small" required variant="outlined" onChange={(e) => 
                setForm({...form, resume: e.target.files[0]})} />
            </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} >
            <Button color="primary" fullWidth type="submit" variant="contained" >
              Apply Application.
            </Button>
            
          </Grid>
          
          </Grid>
        </form>
        <br/>
        <Grid item xs={12} >
        <Link to="/applied">
            <Button color="primary" fullWidth type="submit"  >
              View applied Job
            </Button>
            </Link>
          </Grid>
      </Container>
      </div>
    )
}
export default Form;