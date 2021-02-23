import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './Navbar/navbar';
import Authnav from './Navbar/authnav';
import Login from "./Auth/Login";
import UserContext from "./context/UserContext";
import Signup from "./Auth/Signup";
import Logout from "./Auth/Logout";
import dashboard from './Dashboard/dashboard';
import BlogById from './Dashboard/BlogById';
import ProtectedRoute from "./ProtectedRoute";
import AddPost from "./Posts/addPost";
import GetPosts from "./Posts/GetPosts";

function Routing() {

    const nav = () => {
        if (localStorage.getItem("isLogin")) {
            return <Authnav />
        } else {
            return <Navbar />
        }
    }



    return (
        <Router>
            <div >
                <UserContext.Provider value='hello from hitesh'>
                    <Route path="/" component={nav} />
                    <Route path="/" exact component={dashboard} />
                    <Route path="/BlogById/:id" exact component={BlogById} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/blog/getPosts" exact component={GetPosts} />
                    <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/blog/addPosts" exact component={AddPost} />
                    <ProtectedRoute isAuth={localStorage.getItem("isLogin")} path="/logout" exact component={Logout} />
                </UserContext.Provider>
            </div >
        </Router>

    )
}

export default Routing;
