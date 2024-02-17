import React from "react";
import { useAuth } from "../firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import { appLinks } from "../constants/links";

function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div className="container py-2">
        <h1 className="fw-bold">Login</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={async (values) => {
            try {
              await login(values);
              toast.success("Login Successful");
              navigate(appLinks.Dashboard);
            } catch (error) {
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field className="form-control" type="email" name="email" />
                {touched?.email && errors?.email && (
                  <div className="text-danger fst-italic fs-6">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                />
                {touched?.password && errors?.password && (
                  <div className="text-danger fst-italic fs-6">
                    {errors.password}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-outline-dark">
                  Login
                </button>
              </div>

              <div className="mb-3 text-center">
                <Link to={appLinks.Register} className="fst-italic">Create an account</Link>
              </div>
            </Form>
          )}
        </Formik>
        {/* <button className="btn btn-outline-success" onClick={loginWithGoogle}>Login with Google</button> */}
      </div>
    </>
  );
}

export default Login;
