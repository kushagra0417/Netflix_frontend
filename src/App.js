import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import './App.css';
import PaymentStatus from './Components/Screens/PaymentStatus';
import Home from './Components/Screens/Home';
import Movies from './Components/Screens/Movies';
import NewandPopular from './Components/Screens/NewsandPopular';
import Pricing from './Components/Screens/Pricing';
import Signup from './Components/Screens/SignUp';
import Step1 from './Components/Screens/Step1';
import Step11 from './Components/Screens/Step11';
import Step2 from './Components/Screens/Step2';
import Step3 from './Components/Screens/Step3';
import TVShows from './Components/Screens/Tvshows';
import SignIn from './Components/Screens/SignIn';
import ResetPassword from './Components/Screens/ResetPassword';
import ForgotPassword from './Components/Screens/ForgotPassword';
import SubscribePlan from './Components/Screens/SubcribePlan';
import Profile from './Components/Screens/Profiles';



function Routing(){
  const navigate = useNavigate();


  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    
    if(user){
      console.log("User exists");
    }
    else{
      if(!window.location.pathname.startsWith('/reset')){
        navigate("/signup");

      }
    }
  },[])

  return (
    
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/newnpopular" element={<NewandPopular />}/>
        <Route path="/tvshows" element={<TVShows />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/step1" element={<Step1 />}/>
        <Route path="/step11" element={<Step11 />}/>
        <Route path="/step2" element={<Step2 />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/step3/:amount" element={<Step3 />}/>
        <Route path="/payment/status/:paymentId" element={<PaymentStatus/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/reset/:token" element={<ResetPassword/>}/>
        <Route path="/subscribePlan" element={<SubscribePlan />}/>
        <Route path="/profiles" element={<Profile />}/>
      </Routes>

  )
}

function App() {
 
  return (
    
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
    
 
  );
}
export default App;