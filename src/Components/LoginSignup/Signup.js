import React, { useState } from "react";
import "./LoginSignup.css";
import UserPool from "../../UserPool";

import user_icon from "../Images/user.png";
import email_icon from "../Images/email.png";
import password_icon from "../Images/padlock.png";

const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitSignUp = (event) => {
    setAction("Sign Up");
    console.log("ok");
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
        console.log("email", email);
        console.log("password", password);
        if (err) {
        console.error("Error signing up:", err);
      } else {
        console.log("Sign up successful:", data);
      }
      console.log(data);
    });
  };

  console.log("name", name)
  console.log("email", email)
  console.log("password", password)
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" style={{ height: "20px" }} />
            <input
              type="text"
              placeholder="User Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" style={{ height: "20px" }} />
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" style={{ height: "20px" }} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click here</span>
        </div>
      )}
      <div className="submit-container">
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
          // onClick={onSubmitSignUp}
        >
          Sign Up
        </button>
        <button
          className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}          
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
