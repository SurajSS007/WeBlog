import React from 'react'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import navbar from './Navbar/navbar.jsx'
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Dashboard from './Dashboard/Dashboard'
import ProtectedRoute from "./ProtectedRoute";
import AddPost from "./Posts/AddPost";
import GetPosts from "./Posts/GetPosts";

function Routing() {
    return (
        <Router>
        <div >
            <Route path="/"  component={navbar} />
            <Route path="/" exact component={Dashboard} />
            <Route path="/login"  component={Login} />
            <Route path="/signup"  component={Signup} />
            <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/blog/getPosts" exact component={GetPosts} />
            <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/blog/addPosts" exact component={AddPost} />
        </div > 
        </Router>  
  
    )
}

export default Routing;
