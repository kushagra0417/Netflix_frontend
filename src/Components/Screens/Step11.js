import React, { useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
import M from "materialize-css"
import '../Styles/Step11.css'
import SignUpNavbar from "../Subcomponents/SignUpNavbar"


function Step11(){

    const navigate=useNavigate()
    const[password, setPassword] = useState("")
    const [name, setName] = useState("")
    const { data } = useLocation()
    const [email, setEmail] = useState(data)
    
    console.log("Email", email)

    const PostData=()=>{
        fetch("/api/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
            
        }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                   M.toast({html: data.error,classes:"#f44336 red"})
                }
                else{
                    localStorage.setItem("user",JSON.stringify(data.user))
                    localStorage.setItem("jwt", data.token);
                    navigate('/step2')
                }
            }).catch(err=>{
                console.log(err)
            })
    }

    return (
        <div>
            <SignUpNavbar />
            <div className = "step11-body">
            <div className='step11-mycard'>
            <div className='step11-auth-card step11-input-field' >
                <h2>STEP 1 OF 3</h2>
                <h1>Create a password to start your membership</h1>
                
                <h3>Just a few more steps and you're done!
                <br></br>
                We hate paperwork, too.</h3>
                <input 
                type="text"
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input 
                type="email"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn-style #f44336 red"
                onClick={()=>PostData()}>
                    Continue
                </button>
               </div>
               </div>
            </div>
            </div>
        
    )

}

export default Step11