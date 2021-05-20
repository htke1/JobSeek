import NavTab from '../util/NavTab'
import {Link} from 'react-router-dom'
import HomeBtn from '../util/HomeBtn'
function EmployerHome()
{
    return(
        <div>
        <NavTab pageNext="post_job"/>
        <center><HomeBtn/></center>
        <Link to="/post_job">
        <button>next</button>
        </Link>
        </div>
       
    )
}
export default EmployerHome;