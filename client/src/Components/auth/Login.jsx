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
        <div className="bg-lightColor min-h-[730px]">
          <h1 className="text-center text-5xl text-white py-14 font-bold xs:text-4xl ">
            Welcome to Admin Side
          </h1>
          <div className="grid place-content-center ">
            <div className="p-8 bg-cardColor min-h-[450px] rounded-xl w-[500px]">
              <h1 className="font-bold text-white text-center text-3xl pb-10 pt-4">
                Login
              </h1>
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block w-[100%]">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="email"
                  value={input.email}
                />
              </div>
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block w-[100%]">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="password"
                  value={input.password}
                />
              </div>
              <div className="flex justify-between my-4">
                <Link to="/forgetpassword">
                  <button className="underline text-white outline-none border-0 hover:text-dullWhite">
                    Forget Password?
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="underline text-white border-0 outline-none hover:text-dullWhite">
                    Sign Up Here
                  </button>
                </Link>
              </div>
              <button
                className="text-white bg-greenColor rounded-sm w-full h-[35px] border-0 outline-none hover:bg-green-700"
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
