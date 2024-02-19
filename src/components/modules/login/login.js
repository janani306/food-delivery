import React,{useState,useEffect}from 'react';
import {useNavigate } from "react-router-dom"
import "./login.css";
const Login = () => {
    const navigate=useNavigate()
  return (
    <>
     <div className='background-login'>
        <div className='middle-section'>
            <div className='section-1'>
                <center>
                <h2>SKS Foods</h2></center>
                <p className='welcm'>Welcome Back !!</p>
                <div className='container'>
                    <label>UserName</label><br></br>
                    <input className='login-input' type='text'/><br></br>
                    <label>Password</label><br></br>
                    <input className='login-input' type='password'/>
                    <button className='login-button' onClick={()=>{navigate('/menu')}}>Login</button>
                </div>
            </div>
            <div className='section-2'></div>
        </div>
     </div>
    </>
  )
}

export default Login;

