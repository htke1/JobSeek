import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import  HomeIcon from '@material-ui/icons/Home'
function MyApplied(){
return(
    <div>
    Applyed jobs.
    <Link to="/Employee">
    <Button><HomeIcon/></Button>
    </Link>
    </div>
)
}
export default MyApplied;