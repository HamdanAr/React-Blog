import './sidebar.css';

const SideBar = () => {
    return(
    <>
        <div className='sidebar'>
            <div className='sidebaritem'>
                <div className='sidebarheading'>About Me</div>
                <img src='data:image/jpeg;base64,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'></img>
                <p className='sidebartext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit aperiam quia blanditiis at, placeat numquam quod voluptate, minima eveniet dicta magni doloribus temporibus natus ut! Adipisci sint vitae veniam!</p>
            </div>
            <div className='sidebaritem'>
                <span className='sidebarheading'>Categories</span>
                <ul className='sidebarlist'>
                    <li className='sidebarlistitem'>Music</li>
                    <li className='sidebarlistitem'>Life</li>
                    <li className='sidebarlistitem'>Sport</li>
                    <li className='sidebarlistitem'>Tech</li>
                    <li className='sidebarlistitem'>Style</li>
                </ul>
            </div>  
            <div className='sidebaritem'>
                <span className='sidebarheading'>Folow Us</span>
                <div className='sidebarsocial'>
                    <i class="sidebaricon topicon fa-brands fa-square-facebook"></i>
                    <i class="sidebaricon topicon fa-brands fa-square-instagram"></i>
                    <i class="sidebaricon topicon fa-brands fa-square-pinterest"></i>
                    <i class="sidebaricon topicon fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    </>)
}

export default SideBar;