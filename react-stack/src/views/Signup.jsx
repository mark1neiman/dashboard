import { useRef } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const { setUser, setToken } = useStateContext()

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        // console.log(payload)
        axiosClient.post(`/signup`, payload)
            .then((data) => {
                setToken(data.token)
                setUser(data.user)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(respose.data.errors)
                }
            })
    }

    return (
        <div className='login-signup-form animated fadeInDown'>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <h1 className='title'>Signup right here right now!</h1>
                    <input ref={nameRef} placeholder='Full Name' />
                    <input ref={emailRef} placeholder='Email' type="email" />
                    <input ref={passwordRef} placeholder='Password' type="password" />
                    <input ref={passwordConfirmationRef} placeholder='Password Confirmation' type="password" />
                    <button className='btn btn-block'>Sign up</button>
                    <p className='message'>
                        Already registered? <Link to='/login'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup