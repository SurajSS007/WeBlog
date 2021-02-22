import React from 'react'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import navbar from './Navbar/navbar.jsx'
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import dashboard from './Dashboard/dashboard'
import ProtectedRoute from "./ProtectedRoute";
import addPost from "./Posts/addPost";
import getPost from "./Posts/getPost";
function Routing() {
    return (
        <Router>
        <div >
            <Route path="/"  component={navbar} />
            <Route path="/" exact component={dashboard} />
            <Route path="/login"  component={Login} />
            <Route path="/signup"  component={Signup} />
            <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/blog/getPosts" exact component={addPost} />
            <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/blog/addPosts" exact component={getPost} />
        </div > 
        </Router>  
  
    )
}

export default Routing;
