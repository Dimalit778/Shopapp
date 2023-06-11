import React from 'react';

import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="loginForm d-flex align-items-center justify-content-center ">
      <div className="box d-flex justify-content-center  p-2 mb-2  h-75">
        <div className="form  col-md-8  col-lg-9 col-7 ">
          <h3 className="p my-5  text-center">Register Here</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
            <div className="form-two d-flex gap-2">
              <input
                id="firstname"
                {...register('firstname', { required: true })}
                type="text"
                className=" form-control"
                placeholder="First Name"
              />
              {errors.firstname?.message}
              <input
                id="lastname"
                {...register('lastname', { required: true })}
                type="text"
                className=" form-control"
                placeholder="Last Name"
              />
              {errors.lastname?.message}
            </div>

            <div className="form-group ">
              <input
                id="username"
                {...register('username', { required: true })}
                type="text"
                className=" form-control"
                placeholder="Username"
              />
              {errors.username?.message}
            </div>
            <div className="form-group">
              <input
                id="password-field"
                {...register('password', { required: true })}
                type="password"
                className=" form-control"
                placeholder="Password"
              />
              {errors.password?.message}
              <span
                toggle="#password-field"
                className="fa fa-fw fa-eye field-icon toggle-password"
              ></span>
            </div>
            <div className="form-group ">
              <input
                id="email"
                {...register('email')}
                type="email"
                className=" form-control"
                placeholder="Email"
                required
              />
              {errors.email?.message}
            </div>
            <div className="formSubmit">
              <button
                type="submit"
                className="form-control btn btn-outline-light submit px-3"
              >
                Sign Up
              </button>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-3">
              <p className=" text-light mb-0 ">Already have an account?</p>
              <button type="button" className="btn btn-outline-light btn-sm">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
