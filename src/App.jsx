import React, { useEffect } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import Layout from "./components/layout.jsx";
import NotFoundPage from "./components/notfoundpage.jsx";
import UserProfile from "./components/userProfile.jsx";
import MultipleRoutes from "./routes";
import Auth from "./routes/auth";
import './App.css'

export const App = () => {
  // here * is used to match all incoming urls, by doing this we can nest/group routes together.

  //? you can nest multiple route in side a single route like this.
  // <Route path="/*">
  //   <Route path="/one" element={<One></ne>}></Route>
  //   <Route></Route>
  //   <Route></Route>
  // </Route>
  //* there are two reason why we would do this. one to nest routes so that we can group related routes together and break our routes into multiple components, 2. so that we can add a prefix route and a common layout to a group of routes, here in this file we have nested routes for the first reason and in the route/index file we nest routes for the second reason.

  const navigate = useNavigate()
  
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser')

    if(!user) navigate('/login')
  
  }, [])
  
  
  return (
    <>
      <div>
        <Routes>

          <Route path="/*" element={<Auth></Auth>}></Route>

          <Route  element={<Layout></Layout>}>
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
