import Cardbox from './util/Cardbox'
import Grid from '@material-ui/core/Grid';
import NavBar from './util/NavBar'
import {getJobData} from '../Authcontext'
import React ,{Component} from 'react';
class ViewJob  extends Component {
  state = {
    jobList: [],
  };

  componentDidMount() {

    const email  = localStorage.getItem('email');

    const details =getJobData(email);
    details.then((result)=>{
        console.log(result)
        this.setState({jobList:result})
    })
  }
 

  render() {
    return (
        <div>
        <NavBar/>
        <h2>Job Vacancy available.</h2>
        
        {
            this.state.jobList.map((data)=>(
                <Grid container spacing={1}>
                <Cardbox data={data}/>
                </Grid>
            ))
        }
        
        
        </div>
    );
  }
}

export default ViewJob ;
