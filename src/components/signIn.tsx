import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "../styles/style.css";
import { TOAST_OBJ } from "../utils";
import { SignInTypes } from "../types";
import { SignInValidationSchema } from "../schema";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/authContext";

const SignIn = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const initialValues: SignInTypes = {
    email: "",
    password: "",
  };

  const onSubmit = (values: SignInTypes) => {
    const hashUserInfo = Cookies.get("userInfo") as string;
    const userInfo = JSON.parse(hashUserInfo);
    if (!hashUserInfo || values.email !== atob(userInfo.hashEmail)) {
      toast.error(
        "Email not found. Please check your email or sign up for an account",
        { ...TOAST_OBJ }
      );
      return;
    } else {
      if (values.email !== atob(userInfo.hashEmail)) {
        toast.error("Invalid Email", { ...TOAST_OBJ });
        return;
      } else if (values.password !== atob(userInfo.hashPassword)) {
        toast.error("Invalid Password", { ...TOAST_OBJ });
        return;
      }
      toast.success("Login Successfull!", { ...TOAST_OBJ });
      navigate("/home");
    }
  };

  useEffect(() => {
    const hashUserInfo = Cookies.get("userInfo") as string;
    const userInfo = JSON.parse(hashUserInfo);
    setUser({
      userName: atob(userInfo.hashUserName),
      email: atob(userInfo.hashEmail),
    });
  }, []);

  return (
    <div className="background-radial-gradient flex justify-center items-center h-screen">
      <div className="glass w-full sm:w-1/2 md:w-1/4 shadow-md p-5">
        <h2 className="text-3xl text-center">Sign In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInValidationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="max-w-sm mx-auto mt-8">
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email <em className="text-red-500">*</em>
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2">
                  Password <em className="text-red-500">*</em>
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border p-2 w-full"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Sign In
                </button>
                <Link
                  className="text-[13px] flex justify-center items-center"
                  to="/signup"
                >
                  Don't have an account?
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
