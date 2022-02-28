import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { signupUser } from "../services/usersService";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const { data } = await signupUser(email, password);
      // console.log(data);
      toast("Account successfully created");

      setTimeout(() => {
        window.location = "/login";
      }, 600);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="row">
      <ToastContainer />
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h4>Sign up</h4>
        <form onSubmit={handleSignUp}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Signup;
