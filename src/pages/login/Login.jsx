import './login.css';

const Login = () => {
    return (
    <div className="login">
        <div className="loginTitle">Login</div>
        <form action="" className="loginForm">
            <label> Email </label>
            <input className='loginInput' type="text" placeholder='email' />
            <label> Password </label>
            <input className='loginInput' type="password" placeholder='password' />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>)
}

export default Login;