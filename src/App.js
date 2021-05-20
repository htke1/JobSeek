
import Home from './Home'
import EmployerHome from './Employer/EmployerHome'
import EmployeeHome from './Employee/EmployeeHome'
import PostJob from './Employer/post_a_job'
import ViewJob from './Employer/views_job'
import MyApplied from './Employee/my_applied_projects'
import AvailableJob from './Employee/available_jobs page'
import ApplyForm from './Employee/ApplyForm'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact>
    <Home/>
    </Route>
    <Route path="/Employer">
    <EmployerHome/>
    </Route>
    <Route path="/Employee">
    <EmployeeHome/>
    </Route>
    <Route path="/post_job" exact>
        <PostJob />
        </Route>
    <Route path="/view_job"  component={ViewJob} />

    <Route path="/applied" exact>
        <MyApplied />
        </Route>
    <Route path="/available" exact>
        <AvailableJob />
        </Route>
        <Route path="/apply_form" exact>
        <ApplyForm />
        </Route>
        
    </Switch>
    </BrowserRouter>
         
     
  );
}

export default App;
