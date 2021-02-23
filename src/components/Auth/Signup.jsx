import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import './Logsign.css';
import axios from "../../Axios/axios";

function Signup() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post('/user', data)
            .then(res => {
                window.location.replace('/login')
            })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" name="uname" ref={register({ required: true })} />
                        {errors.uname && 'Username is required.'}
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control" placeholder="Enter Email" name="email" ref={register({ required: true })} />
                        {errors.U_email && 'Email is required.'}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" ref={register({ required: true })} />
                        {errors.U_password && 'Password is required.'}
                    </div>
                    <div className="form-group">
                        <label>Contact No.</label>
                        <input type="text" className="form-control" placeholder="Enter Contact Number" name="contact" ref={register({ required: true })} />
                        {errors.U_contact && 'Contact is required.'}
                    </div>
                    <Button type="submit" className="btn btn-primary btn-block" variant='primary'>Sign Up</Button>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">sign in?</a>
                    </p>
                </div>
            </div>
        </form>
    )
}
export default Signup;