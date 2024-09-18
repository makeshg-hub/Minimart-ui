import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgot.css';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
const Forgot = ()=>{
    const[user,setUser]=useState({
        email:"",
    })
    const handleChangeEmail=(e)=>{
        setUser((prevVal)=>({
            ...prevVal,
            email:e.target.value,
        }))
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if(user.email===""){
            alert("Please Enter Email id")
            return
        }
        const data ={
            email:user.email
        }
        try{
            const response=await axios.post("http://localhost:8083/api/patient/forgot-password",data)
            alert("OTP sent to email id")
            console.log(response.data)

        }catch(err){
            alert("An error occured"+(err.response?err.response.data.message:err.message))
            

        }
    }
    return(
        <div className="forgot-container">
        <div className="forgot-form">
            <h1>Forgot Password</h1>
            <p>Enter your email.We will send you a verification code to reset your password</p>
            <form action="">
                <div className="forgot-group">
                    <label htmlFor="email">Email</label>
                    {/* <input type="email" id="email" name="email" required/> */}
                    <TextField
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChangeEmail}
                    required
                    />
                </div>
                <Button onClick={handleSubmit}>Continue</Button>
                <div className="links">
                    <Link to="/login">Back</Link>
                </div>

            </form>
        </div>
    </div>

    )
}
export default Forgot;