import { useState } from "react";
import { changePasswordAction } from "../../redux/actions/profileActions";
import { loadUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [input, setInput] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(changePasswordAction(input.oldPassword, input.newPassword));
    dispatch(loadUser());
    nav("/");
  };
  return (
    <>
      <div className="bg-lightColor min-h-[610px]">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Change Password
        </h1>
        <div className="grid place-content-center">
          <div className="p-8 bg-cardColor h-[310px] rounded-xl w-[500px]">
            <div className="my-4">
              <label htmlFor="" className="text-dullWhite block w-[100%]">
                Old Password
              </label>
              <input
                type="password"
                className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                onChange={inputHandler}
                name="oldPassword"
                value={input.oldPassword}
              />
            </div>
            <div className="my-4">
              <label htmlFor="" className="text-dullWhite block w-[100%]">
                New Password
              </label>
              <input
                type="password"
                className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                onChange={inputHandler}
                name="newPassword"
                value={input.newPassword}
              />
            </div>

            <div className="mt-8">
              <button
                className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-white"
                onClick={submitHandler}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
