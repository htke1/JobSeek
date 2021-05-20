import Cardbox from './util/Cardbox'
import {Component} from 'react'
import NavBar from './util/NavBar'
import {getJobDataAll} from '../Authcontext'
import Grid from '@material-ui/core/Grid'
class AvailableJob  extends Component {
    state = {
      jobList: [],
    };
  
    componentDidMount() {
  
      const details =getJobDataAll();
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
          <Grid container spacing={1}>
          {
              this.state.jobList.map((data)=>(
                  <Cardbox data={data}/>
  
              ))
          }
          </Grid>
          
          </div>
      );
    }
  }
  
  export default AvailableJob ;   