import { useState } from "react";
// import { forgetPasswordAction } from "../../redux/actions/profileActions";
// import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(forgetPasswordAction(email));
  };

  return (
    <>
      <div className="bg-lightColor min-h-[500px]">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Forget Password?
        </h1>
        <div className="grid place-content-center">
          <div className="p-8 bg-cardColor h-[210px] rounded-xl w-[550px]">
            <div className="my-4 text-center">
              <label htmlFor="" className="text-dullWhite block w-[100%] pb-4">
                Your Email
              </label>
              <input
                type="text"
                className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="">
              <button
                onClick={submitHandler}
                className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
              >
                Get verification mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
