import React, { useState, useContext } from "react";
import { AccountContext } from "../AccountValidation/Account";
import "./LoginSignup.css";

// import user_icon from "../Images/user.png";
import email_icon from "../Images/email.png";
import password_icon from "../Images/padlock.png";

const Login = () => {
  const [action, setAction] = useState("Login");
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmitLogin = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in", data);
      })
      .catch((err) => {
        console.error("Failed to login", err);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {/* {action === "Login" ? (
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
        )} */}
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
        {/* <button
          className={action === "Login" ? "submit gray" : "submit"}
          // onClick={() => {
          //   setAction("Sign Up");
          // }}
          onClick={onSubmit}
        >
          Sign Up
        </button> */}
        <button
          className={action === "Sign Up" ? "submit gray" : "submit"}
          // onClick={() => {
          //   setAction("Login");
          // }}
          onClick={onSubmitLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
