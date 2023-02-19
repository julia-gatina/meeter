import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="container-wrapper">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform form ">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h1>Login</h1>
                  </div>
                </div>
                <form name="login">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      defaultValue="anna.brown@meeter.com"
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter Password"
                      defaultValue="1234567"
                    />
                  </div>
                  <div className="form-group">
                    <p className="text-center mt-2">
                      By signing up you accept our{" "}
                      <a href="/dashboard">Terms Of Use</a>
                    </p>
                  </div>
                  <div className="col-md-12 text-center ">
                    <Link
                      to="/dashboard"
                      className="btn mybtn btn-primary tx-tfm"
                    >
                      Login
                    </Link>
                  </div>
                  <div className="col-md-12 ">
                    <div className="login-or">
                      <hr className="hr-or" />
                      <span className="span-or">or</span>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p className="text-center">
                      <a href="/dashboard" className="google btn mybtn">
                        <i className="fa fa-google-plus"></i> Signup using
                        Google
                      </a>
                    </p>
                  </div>
                  <div className="form-group">
                    <p className="text-center">
                      Don't have account?{" "}
                      <a href="/dashboard" id="signup">
                        Sign up here
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
