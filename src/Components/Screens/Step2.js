import React from "react"
import { useNavigate } from 'react-router-dom'
import SignUpNavbar from "../Subcomponents/SignUpNavbar"
import '../Styles/Step2.css'

function Step2(){
    const navigate = useNavigate()

    return (
            <div>
                <SignUpNavbar />
                <div className = "step2-body">
                    <div className='step2-mycard'>
                        <div className='step1-auth-card' >
                            <span className="material-icons" style={{color:"red", fontSize:"70px", lineHeight:"0", top:"100px"}}>check_circle_outline</span>
                            <h2>STEP 2 OF 3</h2>
                            <h1>Choose your plan.</h1>
                            <h3 className = "step2-icon-card"><i className="small material-icons" style={{color:"red"}}>done</i> No commitments, cancel anytime.</h3>
                            <h3 className = "step2-icon-card"><i className="small material-icons" style={{color:"red"}}>done</i> Everything on Netflix for one low price.</h3>
                            <h3 className = "step2-icon-card"><i className="small material-icons" style={{color:"red"}}>done</i> No ads and no extra fees. Ever.</h3>
                            <button className="step2-btn-style #f44336 red"
                                onClick={()=>{navigate('/pricing')}}>
                                See the Plans   
                            </button>
                        </div>
                    </div> 
                </div> 
            </div>
        
    )

}

export default Step2