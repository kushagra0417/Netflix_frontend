import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SignUpNavbar from "../Subcomponents/SignUpNavbar";
import '../Styles/Step1.css'


function Step1() {
  const navigate = useNavigate();
  const { data } = useLocation();

  return (
    <div>
      <SignUpNavbar />
      <div className="step1-body">
        <div className="step1-mycard">
          <div className="step1-auth-card">
            <i className="medium material-icons" style={{ color: "red" }}>
              laptop
            </i>
            <i className="medium material-icons" style={{ color: "red" }}>
              {" "}
              desktop_windows
            </i>
            <i className="medium material-icons" style={{ color: "red" }}>
              {" "}
              tablet_android
            </i>
            <i className="small material-icons" style={{ color: "red" }}>
              {" "}
              phone_android
            </i>
            <h2>STEP 1 OF 3</h2>
            <h1>Finish setting up your account</h1>
            <h3>
              Netflix is personalised for you. Create a password to watch on any
              device at any time.
            </h3>
            <button
              className="btn-style #f44336 red"
              onClick={() => {
                navigate({
                  pathname: "/step11",
                  data: data,
                });
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step1;