import React, { useState } from "react";
import "../styles/RegisterPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import http from "../http-common";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  let dateString: string = "1";
  let monthString: string = "1";
  let yearString: string = new Date().getFullYear().toString();

  const registerHandler = () => {
    setForm({ ...form, newsletter: false, partners: false });

    http
      .post("/register", form)
      .then(() => {
        navigate("/login");
      })
      .catch(() => {
        dispatch({ type: "ADD_ERROR", payload: "Login failed!" });
      });
  };

  const changeDate = (e: React.FormEvent<EventTarget>): void => {
    const fullDate = `${yearString}-${monthString}-${dateString}`;
    setForm({ ...form, birth_date: fullDate });
    const target = e.target as HTMLInputElement;
    dateString = target.value;
  };
  const changeMonth = (e: React.FormEvent<EventTarget>): void => {
    const fullDate = `${yearString}-${monthString}-${dateString}`;
    setForm({ ...form, birth_date: fullDate });
    const target = e.target as HTMLInputElement;
    monthString = target.value;
  };
  const changeYear = (e: React.FormEvent<EventTarget>): void => {
    const fullDate = `${yearString}-${monthString}-${dateString}`;
    setForm({ ...form, birth_date: fullDate });
    const target = e.target as HTMLInputElement;
    yearString = target.value;
  };

  const dateOptions = [];
  for (let i = 1; i < 32; i++) {
    const x = i.toString();
    const d = ("0" + x).slice(-2);
    dateOptions.push(
      <option key={x} value={d}>
        {x}
      </option>
    );
  }
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const monthOptions: any[] = [];
  monthsArray.forEach((value, key) => {
    const v = key + 1;
    const d = ("0" + v).slice(-2);
    monthOptions.push(
      <option key={key} value={d}>
        {value}
      </option>
    );
  });

  const yearOptions = [];
  for (let i = new Date().getFullYear(); i > 1899; i--) {
    const x = i.toString();
    yearOptions.push(
      <option key={x} value={x}>
        {x}
      </option>
    );
  }
  return (
    <div className="register">
      <form>
        <div className="register-form">
          <h1>Register</h1>
          <h3>Username:</h3>
          <input
            autoComplete="current-username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            type="text"
            name="username"
            placeholder="Username"
          />
          <br />
          <h3>Email:</h3>
          <input
            autoComplete="current-email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <h3>Password:</h3>
          <input
            autoComplete="current-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <h3>Password Confirmation:</h3>
          <input
            autoComplete="current-password_confirmation"
            onChange={(e) =>
              setForm({ ...form, password_confirmation: e.target.value })
            }
            type="password"
            name="password_confirmation"
            placeholder="Password Confirmation"
          />
          <br />
          <h3>Country:</h3>
          <input
            autoComplete="current-country"
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            type="text"
            name="country"
            placeholder="Country"
          />
          <br />
          <h3>City:</h3>
          <input
            autoComplete="current-city"
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            type="text"
            name="city"
            placeholder="City"
          />
          <br />
          <h3>Gender:</h3>
          <div className="radioGroup">
            <div className="radioButton">
              <input
                onChange={() => setForm({ ...form, gender: true })}
                type="radio"
                value="Male"
                name="gender"
              />
              Male
            </div>
            <div className="radioButton">
              <input
                onChange={() => setForm({ ...form, gender: false })}
                type="radio"
                value="Female"
                name="gender"
              />
              Female
            </div>
          </div>
          <br />
          <h3>Birth Date:</h3>
          <div className="selectGroup">
            <h4>Date:</h4>
            <select defaultValue={dateString} onChange={changeDate}>
              {dateOptions}
            </select>
          </div>
          <div className="selectGroup">
            <h4>Month:</h4>
            <select defaultValue={monthString} onChange={changeMonth}>
              {monthOptions}
            </select>
          </div>
          <div className="selectGroup">
            <h4>Year:</h4>
            <select defaultValue={yearString} onChange={changeYear}>
              {yearOptions}
            </select>
          </div>
          <br />
          <input
            onClick={registerHandler}
            type="button"
            value="Register"
            className="register-button"
          />
          <br />
          <Link to="/login" className="sign-in">
            Sign In!
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

export default RegisterPage;
