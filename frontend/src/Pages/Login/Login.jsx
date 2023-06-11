import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const sumbitFunc = async (data, e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="loginForm d-flex align-items-center justify-content-center ">
      <div className="box d-flex justify-content-center  p-2 mb-2 w-50 h-75">
        <div className="form col-md-6 col-lg-4 ">
          <h3 className="p my-5  text-center">Log In Here</h3>
          <form className="signin-form" onSubmit={sumbitFunc}>
            <div className="form-group ">
              <input
                type="text"
                className=" form-control"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <input
                id="password-field"
                type="password"
                className=" form-control"
                placeholder="Password"
                required
              />
              <span
                toggle="#password-field"
                className="fa fa-fw fa-eye field-icon toggle-password"
              ></span>
            </div>
            <div className="formSubmit">
              <button
                type="submit"
                className="form-control btn btn-outline-light submit px-3"
              >
                Log In
              </button>
            </div>

            <Link
              className="text d-flex justify-content-center decoration-none "
              to="/resetpassword"
            >
              Forgot password?
            </Link>

            <div className="d-flex align-items-center justify-content-center gap-3">
              <p className=" text-light mb-0 ">Don't have an account?</p>
              <button type="button" className="btn btn-outline-light btn-sm">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
