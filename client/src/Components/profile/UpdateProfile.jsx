import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileUpdateAction } from "../../redux/actions/profileActions";
import { loadUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {
    user: { name, email, avatar },
  } = useSelector((state) => state.userReducer);
  const [imagePreview, setImagePreview] = useState(avatar?.url ?? "");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [input, setInput] = useState({
    name: name ?? "",
    email: email ?? "",
  });

  const imageClickInputHandler = (e) => {
    e.preventDefault();
    const signUpAvatar = document.getElementById("signUpAvatar");
    signUpAvatar.click();
  };

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const inputImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(file);
      setImagePreview(reader.result); //result of reader.readAsDataURL(file)
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", input.name);
    myForm.append("email", input.email);
    myForm.append("file", image);
    //same as 6pp but not working in my case + automatice logging out when update profile - in case of put await in disptatching.
    await dispatch(profileUpdateAction(myForm));

    dispatch(loadUser());
    nav("/profile");
  };

  return (
    <>
      <div className="bg-lightColor min-h-[800px]">
        <h1 className="text-center text-5xl text-white py-16 font-bold">
          Update Your Profile
        </h1>
        <div className="grid place-content-center">
          <form action="" onSubmit={submitHandler}>
            <div className="p-8 bg-cardColor h-[510px] rounded-xl w-[550px]">
              <div className="flex justify-center items-center">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                  }}
                  className="bg-dullWhite border-4 border-white overflow-hidden my-4"
                >
                  <img
                    src={imagePreview}
                    alt="profilePic"
                    className="h-full w-auto object-cover"
                  />
                </div>
              </div>
              <div className="my-4">
                <label htmlFor="" className="text-dullWhite block w-[100%]">
                  New Name
                </label>
                <input
                  type="text"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="name"
                  value={input.name}
                />
              </div>
              <div className="my-4 mb-10">
                <label htmlFor="" className="text-dullWhite block w-[100%]">
                  New Email
                </label>
                <input
                  type="email"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="email"
                  value={input.email}
                />
              </div>
              <div className="my-3">
                <button
                  onClick={imageClickInputHandler}
                  className="cursor-pointer hover:bg-hoverColorBlue bg-blueColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
                >
                  Update Profile Image
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={inputImageHandler}
                  id="signUpAvatar"
                  className="Avatar hidden"
                />
              </div>

              <button
                className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
                onClick={submitHandler}
              >
                Save Updates
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
