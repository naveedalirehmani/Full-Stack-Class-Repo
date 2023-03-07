import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Layout from "./components/layout.jsx";
import NotFoundPage from "./components/notfoundpage.jsx";
import UserProfile from "./components/userProfile.jsx";
import MultipleRoutes from "./routes";
import Auth from "./routes/auth";
import "./App.css";
import { useDispatch, useStore } from "./store/index.jsx";
import { http, updateToken } from "./http/http.js";
import { useQuery } from "react-query";
import { userQuery } from "./query/quries.js";

export const App = () => {
  const location = useLocation();
  // here * is used to match all incoming urls, by doing this we can nest/group routes together.

  //? you can nest multiple route in side a single route like this.
  // <Route path="/*">
  //   <Route path="/one" element={<One></One>}></Route>
  //   <Route></Route>
  //   <Route></Route>loggedInUser
  // </Route>

  //* there are two reason why we would do this. one to nest routes so that we can group related routes together and break our routes into multiple components, 2. so that we can add a prefix route and a common layout to a group of routes, here in this file we have nested routes for the first reason and in the route/index file we nest routes for the second reason.

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const { data, isLoading, error, refetch } = useQuery('USER', () => {
    if (!token) return

    return userQuery()
  })


  useEffect(() => {
    updateToken(token);
    if (token) {
      refetch()
    }
  }, []);

  useEffect(()=>{
    if(data) {
      dispatch({ type: "ADD_LOGGINED_USER", payload: data.user });
    }
  }, [data , dispatch])


  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login")
    } else {
      if (location.pathname === '/') {
        navigate('/userProfile')
      } else {
        navigate(location.pathname)
      };

    }
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/*" element={<Auth></Auth>}></Route>

          <Route element={<Layout></Layout>}>
            <Route path="/userprofile" element={<UserProfile></UserProfile>} />
          </Route>

          <Route
            path="routes/*"
            element={<MultipleRoutes></MultipleRoutes>}
          ></Route>

          <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
