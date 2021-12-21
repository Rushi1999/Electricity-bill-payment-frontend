import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AppUser from "./models/AppUser";

const Login = () => {
  // const history = useHistory();

  const [appUser, setAppUser] = useState(new AppUser());
  const [credentials, setCredentials] = useState("");

  const handleAppUser = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setAppUser({
      ...appUser,
      [event.target.name]: event.target.value,
    });
  };

  const submitAppUser = (event) => {
    axios
      .post(`http://localhost:8082/user/login`, appUser)
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("isUserLoggedIn", true);
        sessionStorage.setItem("loggedInUser", response.data.role);
        alert("Success");
        window.location.assign("/home");
        // history.push('/home');
      })
      .catch((error) => {
        sessionStorage.setItem("isUserLoggedIn", false);
        sessionStorage.clear();
        console.log(error.response);
        setCredentials("Enter proper credentials.");
      });
    event.preventDefault();
  };
  return (
    <div class="container register-form col-6">
      <div class="form">
        <div class="note">
          <p>This is a Login Form made using Boostrap.</p>
        </div>

        <div class="form-content">
          <div class="col-md-7">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="userName"
                id="userName"
                placeholder="Your User Name *"
                value={appUser.userName}
                onChange={handleAppUser}
                autoFocus
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="password"
                id="password"
                placeholder="Password *"
                value={appUser.password}
                onChange={handleAppUser}
                required
                type="password"
              />
            </div>
            <div class="form-group">
              <select
                class="form-control mb-3"
                name="role"
                id="role"
                onChange={handleAppUser}
              >
                <option value="Role">Select a role</option>
                <option value="ADMIN">ADMIN</option>
                <option value="CUSTOMER">CUSTOMER</option>
              </select>
            </div>
            <p className="text-danger">{credentials}</p>
            {/* <Link to="/register" className="btn btn-primary col-12">
              Not yet registered? Register{" "}
            </Link> */}
            <button type="button" to="/register" class="btn btn-link">
              Not yet registered? Register
            </button>
          </div>
        </div>

        <input
          type="submit"
          id="submit"
          name="submit"
          class="btnSubmit form-control btn btn-primary mb-3"
          value="Login"
          onClick={submitAppUser}
        />
      </div>
    </div>
  );
};
export default Login;
