import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      const user = jwtDecode(token);
      console.log(user);
    } catch (ex) {
      //We dont need to do any
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
