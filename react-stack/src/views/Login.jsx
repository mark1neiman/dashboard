import React from 'react'
import { Link } from 'react-router-dom'

const onSubmit = (e) => {
    e.preventDefault();
}

const Login = () => {
    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <h1 className='title'>Login right here right now!</h1>
                    <input placeholder='Email' type="email" />
                    <input placeholder='Password' type="password" />
                    <button className='btn btn-block'>Login</button>
                    <p className='message'>
                        Not registered? <Link to='/signup'>Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login