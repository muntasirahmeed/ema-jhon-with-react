import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const userLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">Login</h1>
        <form onSubmit={userLogin}>
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
          <input className="submit-button" type="submit" value="Login" />
          <p className="link-text">
            New to Ema-john? <Link to="/signup">Create New Account</Link>
          </p>
          <p className="error">{error?.message}</p>
          {loading && <p>Loading...</p>}

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

export default Login;
