import './write.css';

const Write = () => {
    return(
        <div className='write'> 
        <img src="https://img.freepik.com/premium-photo/beautiful-emerald-lake-yoho-national-park-british-columbia-canada_131985-177.jpg?w=2000" alt="" className="writeimage" />
            <form className="writeform">
                <div className="writeformgroup">
                    <label htmlFor="choseinputfile">
                        <i class="writeicon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='choseinputfile' style={{display: "none"}}/>
                    <input type="text" placeholder='Title' className='writeinput' autoFocus={true}/>
                </div>
                <div className="writeformgroup">
                    <textarea placeholder='Tell your story...' className='writeinput writetext'></textarea>
                </div>
                <button className="writesubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write;