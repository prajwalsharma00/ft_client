import "./App.css";
// import Button from 'react-bootstrap/Button'

import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { DefaultLayout } from "./components/layout/DefaultLayout";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import { Auth } from "./auth/Auth";
import { useEffect } from "react";
import { autoLogin } from "./utils/users";
import { useUser } from "./context/UserContext";
import { WorkInProgress } from "./components/WorkInProgress";

function App() {
  const { user, setUser } = useUser();
  useEffect(() => {
    !user?._id && updateUser();
  }, [user?._id]);

  const updateUser = async () => {
    const user = await autoLogin();
    setUser(user);
  };

  return (
    // TODO: 3 apply wrapper class
    <div className="">
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
          <Route index element={<Login />} />

          {/* TODO: 2. Replace WorkInProgress component with the actual SignUp component 
          Update the route to render <SignUp /> instead of <WorkInProgress /> when users visit "/signup".
          */}
          <Route path="signup" element={<WorkInProgress />} />
          {/* <Route path="signup" element={<SignUp />} /> */}

          <Route
            path="dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
