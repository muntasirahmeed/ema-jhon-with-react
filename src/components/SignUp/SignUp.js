import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPass, setConfrimPass] = useState("");
  const [error1, setError1] = useState("");
  const [createUserWithEmailAndPassword, user,error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfrimPass = (event) => {
    setConfrimPass(event.target.value);
  };
  if (user) {
    navigate('/')
  }
  
  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confrimPass) {
      setError1("Password din't match !");
      return;
    }
    if (password.length < 6) {
      setError1("Password must be 6 character !");
      return;
    }
    createUserWithEmailAndPassword(email, password)
   
  };

  return (
    <div className="container2">
      <div>
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confrim Password</label>
            <input
              onBlur={handleConfrimPass}
              type="password"
              name="confrim-password"
              required
            />
          </div>
          <p className="error">{error1}</p>
          <input className="submit-button" type="submit" value="Sign Up" />
          <p className="link-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <div className="line">
            {" "}
            <p></p> <span className="or-text">Or</span> <p></p>
          </div>
          <div className="google-signin">
            <img
              src="https://w7.pngwing.com/pngs/882/225/png-transparent-google-logo-google-logo-google-search-icon-google-text-logo-business.png"
              alt=""
            />
            <p>Continue with Google</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
