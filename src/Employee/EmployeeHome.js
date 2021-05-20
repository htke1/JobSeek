import NavTab from '../util/NavTab'
import HomeBtn from '../util/HomeBtn'
import {Link} from 'react-router-dom'
function EmployeeHome()
{
    return(
        <div>
        <NavTab page1="available_job" page2="my_applied"></NavTab>
        <HomeBtn/>
        <Link to="/available">
        <button>next</button>
        </Link>
          </div>
    )
}
export default EmployeeHome;