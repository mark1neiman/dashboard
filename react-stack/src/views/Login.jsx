import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios-client';

const Login = () => {


    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)

    const emailRef = createRef();
    const passwordRef = createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message)
                }
            })
    }

    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    {message &&
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    }
                    <h1 className='title'>Login right here right now!</h1>
                    <input ref={emailRef} placeholder='Email' type="email" />
                    <input ref={passwordRef} placeholder='Password' type="password" />
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