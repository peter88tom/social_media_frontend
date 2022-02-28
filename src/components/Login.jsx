import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { loginUser } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(email, password);

      localStorage.setItem("token", data["access_token"]);
      // console.log(data["access_token"]);
      toast("Login success");

      setTimeout(() => {
        window.location = "/";
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
        <h5>Sign in</h5>
        <form onSubmit={handleLogin}>
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
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

          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Login;
