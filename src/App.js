import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { getUser } from "./services/usersService";
import UsersList from "./components/UsersList";

function App() {
  const [useremail, setUserEmail] = useState(false);

  useEffect(async () => {
    const token = localStorage.getItem("token");
    try {
      const _user = jwtDecode(token);

      const { data: user } = await getUser(_user.user_id);
      // console.log(user);
      setUserEmail(user.email);
    } catch (ex) {
      //We dont need to do any
    }
  }, [useremail]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout useremail={useremail} />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="users" element={<UsersList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
