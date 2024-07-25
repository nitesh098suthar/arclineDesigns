import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userActions";
import Loader from "../Layout/Loader";
import {
  clearUserError,
  clearUserMessage,
} from "../../redux/reducers/userReducers";
import toast from "react-hot-toast";

const Signup = () => {
  const { loading, message, error } = useSelector((state) => state.userReducer);
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const imageClickInputHandler = (e) => {
    e.preventDefault();
    document.getElementById("signUpAvatar").click();
  };

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error("Please upload an avatar.");
      return;
    }

    const myForm = new FormData();
    myForm.append("name", input.name);
    myForm.append("email", input.email);
    myForm.append("password", input.password);
    myForm.append("file", image);

    await dispatch(register(myForm));
  };

  const inputImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
    }
  };

  useEffect(() => {
    if (message) {
      toast.success("Signup successful");
      dispatch(clearUserMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearUserError());
    }
  }, [dispatch, clearUserMessage, clearUserError, toast, message, error]);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-[60vh] p-6 w-[600px] mx-auto mobile:w-full">
      <div className="flex justify-center items-center">
        <div className="flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold text-center">
            Signup to admin site
          </h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="bg-lightGrey border-primary p-6 rounded-lg w-full">
        <form action="" onSubmit={submitHandler}>
          <div className="grid place-content-center mb-6">
            <div
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              className="bg-white border-2 border-primary overflow-hidden"
            >
              <img
                src={imagePreview}
                alt=""
                className="h-full w-auto object-cover bg-slate-100"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 pb-4">
            <p className="text-sm font-semibold">Name</p>
            <input
              type="text"
              className="bg-white p-2 outline-none rounded-md w-full"
              placeholder="Enter your name"
              onChange={inputHandler}
              name="name"
              value={input.name}
            />
          </div>
          <div className="flex flex-col space-y-2  pb-4">
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
          <div className="flex flex-col space-y-2  pb-4">
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
          <div className="flex flex-col space-y-2 mt-2">
            <button
              onClick={imageClickInputHandler}
              className="text-primary bg-secondary p-2 w-full outline-none rounded-md border-primary border-[1px] hover:bg-white/0"
            >
              Upload Avatar
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={inputImageHandler}
              id="signUpAvatar"
              style={{ display: "none" }}
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-primary p-2 w-full outline-none rounded-md mt-4"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
