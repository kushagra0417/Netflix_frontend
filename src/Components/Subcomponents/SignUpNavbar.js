import React from "react"
import logo from "../../Images/logo.png"
import "../Styles/SignUpNavbar.css"


function SignUpNavbar(){

    return (
        
        <div className= "nav nav-black">
            <div className="nav-contents">
                <img className = "nav-logo" src = {logo} alt = "" />    
                <a href="/signin" className= "nav-tab">Sign Out</a>
            </div>
        </div>
    )

}

export default SignUpNavbar