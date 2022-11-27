import SideBar from '../../sidebar/SideBar';
import SinglePost from '../../singlepost/singlepost';
import './single.css';

const Single = () => {
    return(<div className='single'>
        <SinglePost></SinglePost>
        <SideBar></SideBar>
    </div>)
}

export default Single;