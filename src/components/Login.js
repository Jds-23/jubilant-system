import React,{useState} from 'react'
import './Login.css'
import image from './image.png'
import logo from './owl-logo.png'
import google from './google.png'
import linkedin from './linkedin.png'
import axios from '../axios'

const Login = ({setUser}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin=async ()=>{
        const response=await axios({
            method:'post',
            url:'/prod/login',
            data:{
                username:email,
                password
            }
        })
        // console.log(response.data.result)
        setUser({user: response.data.result})
    }
    return (
        <div className='login-container' style={{ minHeight: '100vh' }}>
            <div className='login-left-section'>
                <img alt='img' className='login-left-image' src={image} />
            </div>
            <div className='login-right-section'>
                <div className='login-brand'>
                    <img alt='img' className='login-brand-logo' src={logo} />
                </div>
                <p className='login-welcome'>Welcome,please login.</p>
                <div className='login-form'>
                    <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <div className='login-form-extra'>
                        <div className='login-form-checkbox'>
                            <input type='checkbox'/>
                            <label>Remember Me</label>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                    <button className='login-form-button' onClick={handleLogin}>Log in</button>
                    <button className='login-form-google-button'>
                        <img alt='google' src={google}/>
                        Log in with Google</button>
                    <button className='login-form-linkedin-button'>
                    <img alt='linkedin' src={linkedin}/>
                        Log in with LinkedIn</button>
                <p className='login-form-footer'>Don't have an account? <span>Sign-up today</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login
