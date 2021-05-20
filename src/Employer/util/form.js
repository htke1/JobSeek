import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import {useState} from 'react'
import {uploadDetails} from '../../Authcontext'
function Form ()
{
    const [form,setForm] = useState({
        JobTitle:'',
        City:'',
        JobType:'',
        NumberofOpenings:'',
        JobDescription:'',
        CTC:''
    })
    const handleSubmit = async(e)=>{
      console.log("fired rr");
        e.preventDefault();
        var res=await uploadDetails(form);
        console.log(res);
        
        
    }

    return(
        <Container  maxWidth="xs">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="JobTitle
                  " name="JobTitle
                    " size="small" variant="outlined"
                    required
                    onChange={(e) => 
                        setForm({...form, JobTitle: e.target.value})} />
                </Grid>
                <Grid item xs={12}>
                <TextField fullWidth label="JobType" name="JobType" size="small" variant="outlined" required onChange={(e) => 
                    setForm({...form, JobType: e.target.value})}
                /> 
              </Grid>
              <Grid item xs={12}>
              <TextField fullWidth label="City" name="City" size="small" required variant="outlined" onChange={(e) => 
                setForm({...form, City: e.target.value})} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="NumberofOpenings
              " name="NumberofOpenings
                " size="small" variant="outlined" required
                onChange={(e) => 
                    setForm({...form, NumberofOpenings: e.target.value})} 
                />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="JobDescription" name="JobDescription" required size="small" variant="outlined" onChange={(e) => 
                setForm({...form, JobDescription: e.target.value})} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="CTC" name="CTC" size="small" variant="outlined" onChange={(e) => 
                setForm({...form, CTC: e.target.value})} />
            </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} >
            <Button color="dark" fullWidth type="submit" variant="contained" >
              Add Job Detail.
            </Button>
          </Grid>
          
          </Grid>
        </form>
        <br/>
        <Grid item xs={12} >
        <Link to="/view_job">
            <Button color="primary" fullWidth type="submit" variant="contained" >
              View Jobs
            </Button>
            </Link>
          </Grid>
      </Container>
    )
}
export default Form;