import React from "react"
import {useNavigate} from 'react-router-dom'

import "../Styles/Step1.css"
import SignUpNavbar from "../Subcomponents/SignUpNavbar"

function SubscribePlan(){
    const navigate = useNavigate()

    return (
        
        <div>
            <SignUpNavbar />
            <div className = "step1-body">
            <div className='step1-mycard'>
            <div className='step1-auth-card' >
                <h2>Oops! You're still not a member of Netflix!</h2>
                <h1>Finish setting up your account</h1>
                <h3>Subscribe to a plan now and enjoy your membership!</h3>
                <button className="btn-style #f44336 red"
                 onClick={()=>{navigate('/pricing')}}>
                    See the plans    
                </button>
               </div>
               </div>
            </div>
            </div>    
    )

}

export default SubscribePlan