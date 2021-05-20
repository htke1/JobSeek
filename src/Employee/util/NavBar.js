import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom'
function HomeBtn(){

    return(
        <center>
<Link to="/Employee">
        <Button >
        <HomeIcon color="primary" fontSize="large"/>
        </Button>
        </Link>
        </center>
    )
}

export default HomeBtn;