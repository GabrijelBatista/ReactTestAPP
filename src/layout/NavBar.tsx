import React from "react";
import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import logo from "../logo.svg";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: RootStateOrAny) => state.TokenReducer.token
  );

  (function setAxiosAuthHeader() {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  })();

  const logoutHandler = () => {
    dispatch({ type: "REMOVE_TOKEN", payload: null });
    dispatch({ type: "REMOVE_ERROR", payload: null });
    dispatch({ type: "REMOVE_TABS", payload: null });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={logo} height="36" alt="" />
      </Link>
      <div className="auth-buttons">
        {!token ? (
          <>
            <Link className="right-link" to="/login">
              <button type="button" className="auth-btn">
                Login
              </button>
            </Link>
            <Link className="right-link" to="/register">
              <button type="button" className="auth-btn">
                Register
              </button>
            </Link>
          </>
        ) : (
          <button
            type="button"
            onClick={logoutHandler}
            className="auth-btn rigth-link"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
