import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./links";

const Landing = React.lazy(() => import("../pages/Landing"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <>
              <div>
                <p>Aren't you lovely. Getting you there in a jiffy </p>
              </div>
            </>
          }
        >
          <Routes>
            <Route exact path={appLinks.Landing} element={<Landing />} />
            <Route path={appLinks.Login} element={<Login />} />
            <Route path={appLinks.Register} element={<Register />} />
            <Route path={appLinks.Dashboard} element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
