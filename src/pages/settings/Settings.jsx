import SideBar from '../../sidebar/SideBar';
import './settings.css';

const Settings = () => {
    return(
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label htmlFor="">Profile Picture</label>
                    <div className='settingsPP'>
                        <img src="https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display: "none"}} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='username' />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='email'/>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    )
}

export default Settings;