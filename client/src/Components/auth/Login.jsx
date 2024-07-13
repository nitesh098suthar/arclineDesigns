

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Layout/Loader.jsx";
import { clearUserError } from "../../redux/reducers/userReducers.js";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.userReducer
  );
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(input.email, input.password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearUserError());
    }
    if (isAuthenticated) {
      nav("/admin");
    }
  }, [toast, isAuthenticated, error, nav, dispatch, clearUserError]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-[60vh] p-16 w-[600px] mx-auto mobile:w-[380px] xxs:w-[300px]">
          <div className="flex justify-center items-center">
            <div className="flex items-center flex-col mb-8">
              <h1 className="text-3xl font-semibold text-center">
                Login into admin side
              </h1>
              <div className="flex gap-1 my-4">
                <div className="w-14 h-[5px] rounded-full bg-primary"></div>
                <div className="w-4 h-[5px] rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
          <div className="bg-lightGrey border-primary p-6 rounded-lg w-full">
            <div className="flex flex-col space-y-2 pb-4">
              <p className="text-sm font-semibold">Email</p>
              <input
                type="text"
                className="bg-white p-2 outline-none rounded-md w-full"
                      placeholder="Enter your mail id"
                onChange={inputHandler}
                name="email"
                value={input.email}
              />
            </div>
            <div className="flex flex-col space-y-2 pb-2">
              <p className="text-sm font-semibold">Password</p>
              <input
                type="password"
                className="bg-white p-2 outline-none rounded-md w-full"
                      placeholder="Enter your password"
                onChange={inputHandler}
                name="password"
                value={input.password}
              />
            </div>
            <div>
              <button
                className="text-white bg-primary p-2 w-full outline-none rounded-md mt-4 "
                onClick={submitHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
