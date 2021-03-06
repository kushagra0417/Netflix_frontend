import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "../../Images/logo.png";
import M from "materialize-css";
import "../Styles/SignIn.css";

function SignIn(){
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  localStorage.clear();
  

  const PostData = () => {
    fetch("/api/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          if(data.error==='Please subscribe to a plan first!'){
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.savedUser));
            navigate('/subscribePlan')
          }
          M.toast({ html: data.error, classes: "#f44336 red" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.savedUser));

          navigate("/profiles");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup-screen">
      <div className="signup-bg">
        <img className="signup-logo" src={logo} alt="" />

        <div className="gradient" />
        <div className="signin-body">
          <div className="signin-mycard">
            <div className="signin-card signin-auth-card signin-input-field ">
              <h2 style={{ color: "white" }}>Sign In</h2>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="signin-btn-style #f44336 red"
                onClick={() => PostData()}
              >
                Sign In
              </button>
              <Link to="/forgotpassword">
                <h5 style={{ fontSize: "15px", color: "grey" }}>Need help? </h5>
              </Link>

              <h5 style={{ fontSize: "15px", color: "grey" }}>
                New to Netflix?
                <Link to="/signup" style={{ color: "white" }}>
                  {" "}
                  Sign up now
                </Link>
              </h5>
              <h6 style={{ fontSize: "15px", color: "grey" }}>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <Link to="/reset"> Learn more.</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;