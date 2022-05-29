import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.png'
import profileIcon1 from '../../Images/profileIcon1.png'
import '../Styles/Navbar.css'
import M from 'materialize-css'


function Navbar() {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate()
  const dropdownTrigger1 = useRef(null)



  console.log("navbar functions")
  const transitionNavbar = () => {

    if (window.scrollY > 100)
      handleShow(true)
    else
      handleShow(false)
  }
  useEffect(() => {
    M.Dropdown.init(dropdownTrigger1.current)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar)
    return () => window.removeEventListener("scroll", transitionNavbar)
  }, [])

  useEffect(() => {
    function nav() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    }
    nav()
  }, [])


  return (
    <div>

      <nav className={`home-nav ${show && "home-nav-black"}`}>
        <div className="nav-wrapper">
          <img className="home-nav-logo" src={logo} alt="" />
          <a href="#" data-target="mobile-demo" className="side sidenav-trigger">Browse</a>
          <a className='right dropdown-trigger-1' href='#'
            data-target='dropdown2' ref={dropdownTrigger1}>
            <img className="home-nav-profile-icon " src={profileIcon1} alt="" /></a>
          <ul id='dropdown2' className="dropdown-content">
            <li><a href="/profiles" style={{ color: "white" }}>Profiles</a></li>
            <li><a href="/home" style={{ color: "white" }}>Account</a></li>
            <li><a style={{ color: "white" }} onClick={() => {
              
              navigate('/signin')
            }}>Logout</a></li>
          </ul>
          <ul className="home-nav-tabs hide-on-med-and-down">
            <li><a href="/home" >Home</a></li>
            <li><a href="/tvshows" >TV shows</a></li>
            <li><a href="/movies" >Movies</a></li>
            <li><a href="/newnpopular" >New and Popular</a></li>
          </ul>
          <ul className="home-nav-tabs-left hide-on-med-and-down">
            <li><i className="material-icons">search</i></li>
            <li><a href="/tvshows" >CHILDREN</a></li>
            <li><i className="material-icons">notifications</i></li>


          </ul>
        </div>
        {/* </div> */}
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="/home" style={{ color: "white" }}>Home</a></li>
        <li><a href="/tvshows" style={{ color: "white" }} >TV shows</a></li>
        <li><a href="/movies" style={{ color: "white" }} >Movies</a></li>
        <li><a href="/newnpopular" style={{ color: "white" }}>New and Popular</a></li>

      </ul>

    </div>
  )
}

export default Navbar;