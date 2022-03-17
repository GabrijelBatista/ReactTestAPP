import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import http from "../http-common";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  const loginHandler = () => {
    http.post("/login", form).then((response) => {
      dispatch({ type: "ADD_TOKEN", payload: response.data.token });
      dispatch({ type: "ADD_USER", payload: response.data.user });
      navigate("/");
    });
  };
  return (
    <div className="login">
      <form>
        <div className="login-form">
          <h1>Login</h1>
          <h3>Email:</h3>
          <input
            autoComplete="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            placeholder="Email"
          />
          <br />
          <h3>Password:</h3>
          <input
            autoComplete="current-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            placeholder="Password"
          />
          <br />
          <input
            onClick={loginHandler}
            type="button"
            value="Login"
            className="login-button"
          />
          <br />
          <Link to="/register" className="sign-up">
            Sign Up!
          </Link>
          <br />
        </div>
        <div className="error-page">
          <div className="try-again">Error: Try again?</div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
