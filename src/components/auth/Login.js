import React from "react";

const Login = () => {
  return (
    <div className="main-w3ls">
      <div className="left-content">
        <div className="w3ls-content">
          <a href="/">
            <img src={require("./images/maharah_logo.png")} alt="Logo" />
          </a>

          <div className="row">
            <div className="col-md-7 col-sm-7">
              <div className="content-txt">
                <h2>Welcome to Maharah</h2>
                <p>
                  Get a complete clear view to learn and explore reports, review
                  important account stats and explore features that we recommand
                  based on your activity.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-5">
              <img src={require("./images/illustration.png")} alt="Banner" />
            </div>
          </div>
        </div>
      </div>

      <div className="right-form-agile">
        <div className="sub-main-w3">
          <h3>Dashboard Login</h3>
          <p>
            Please sign in with your email id and password incorporated with
            your Maharah Account..
          </p>
          <form method="post">
            <div className="form-style-agile">
              <div className="pom-agile">
                <input
                  placeholder="Username"
                  name="username"
                  type="text"
                  required=""
                />
              </div>
            </div>
            <div className="form-style-agile">
              <div className="pom-agile">
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password1"
                  required=""
                />
              </div>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
