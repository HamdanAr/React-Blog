import './register.css';

const Register = () => {
    return (
    <div className="register">
        <div className="registerTitle">Register</div>
        <form action="" className="registerForm">
            <label> Username </label>
            <input className='registerInput' type="text" placeholder='username' />
            <label> Email </label>
            <input className='registerInput' type="text" placeholder='email' />
            <label> Password </label>
            <input className='registerInput' type="password" placeholder='password' />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>)
}

export default Register;