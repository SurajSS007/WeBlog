import React, { useEffect } from 'react'
import { Redirect } from "react-router-dom";
function Logout() {

    useEffect(()=>{
        localStorage.removeItem("isLogin")
    })

    return (
        <div>
           <Redirect to={"/login"} />
        </div>
    )
}

export default Logout
