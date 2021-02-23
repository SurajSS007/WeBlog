import React, { useState } from "react";
// import { Navbar,Nav,NavDropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logsign.css';
import axios from "../../Axios/axios";
import authaxios from "../../Axios/authaxios";

import { Redirect } from "react-router-dom";


function Login() {
    const input = {
        uname: "",
        password: ""
    }
    const [login, setLogin] = useState(input)
    const { uname, password } = login

    const handleInputChange = e => {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }

    const handleFinalChange = e => {
        console.log(login);
        const config={
            headers:{
               'Content-Type':'application/json'
            }
        }


        axios.post('/user/login', login,config)
            .then((res) => {
                if (!res.data.auth) {
                } else {
                    const token = res.data.token;
                    const auth = res.data.auth;
                    let id = res.data.result._id;
                    let uname = res.data.result.uname;
                    console.log(token,auth,id,uname)
                    localStorage.setItem("isLogin",auth)
                    localStorage.setItem("user", id)
                    localStorage.setItem("token", token)
                    localStorage.setItem("uname", uname)
                    
                    // window.location.replace('/');    

                }
            })
    }



    return (


            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Login In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" id="uname" value={uname} onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" value={password} onChange={handleInputChange} />
                    </div>

                    <button className="btn btn-primary btn-block" onClick={handleFinalChange} >Login</button>
                </div>
            </div>


    )
}


export default Login;