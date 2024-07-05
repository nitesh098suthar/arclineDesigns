import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

// Signup Component
const Signup = () => {
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
      alert("Please upload an avatar.");
      return;
    }

    const myForm = new FormData();
    myForm.append("name", input.name);
    myForm.append("email", input.email);
    myForm.append("password", input.password);
    myForm.append("file", image);

    console.log("register started...");
    for (let [key, value] of myForm.entries()) {
      console.log(key, value);
    }

    await dispatch(register(myForm));
    console.log("register done!");
  };

  const inputImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result); // result of reader.readAsDataURL(file)
      };
    }
  };

  return (
    <>
      <div className="bg-lightColor min-h-[950px]">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Welcome to Course Bundler
        </h1>
        <div className="grid place-content-center">
          <form action="" onSubmit={submitHandler}>
            <div className="p-8 bg-cardColor h-[680px] rounded-xl w-[550px]">
              <h1 className="font-bold text-white text-center text-3xl pb-10 pt-4">
                Signup
              </h1>
              <div className="grid place-content-center">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  className="bg-dullWhite border-4 border-white overflow-hidden"
                >
                  <img
                    src={imagePreview}
                    alt="Avatar Preview"
                    className="h-[100%] w-auto object-cover"
                  />
                </div>
              </div>
              <div className="my-4">
                <label htmlFor="name" className="text-dullWhite block w-[100%]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="name"
                  value={input.name}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="text-dullWhite block w-[100%]"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="email"
                  value={input.email}
                />
              </div>
              <div className="my-4">
                <label
                  htmlFor="password"
                  className="text-dullWhite block w-[100%]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  onChange={inputHandler}
                  name="password"
                  value={input.password}
                />
              </div>
              <div className="imageInput my-4">
                <button
                  onClick={imageClickInputHandler}
                  className="cursor-pointer hover:bg-hoverColorBlue bg-blueColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
                >
                  Upload Avatar
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={inputImageHandler}
                  id="signUpAvatar"
                  className="Avatar"
                  style={{ display: "none" }} // Hide the file input
                />
              </div>
              <div className="my-4">
                <button
                  type="submit"
                  className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center my-10">
                <Link to="/login">
                  <button className="underline text-white outline-none border-0 hover:text-dullWhite">
                    Already Signed Up?
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/actions/userActions";

// const Signup = () => {
//   const [imagePreview, setImagePreview] = useState("");
//   const [image, setImage] = useState("");
//   const dispatch = useDispatch();

//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const imageClickInputHandler = (e) => {
//     e.preventDefault();
//     const signUpAvatar = document.getElementById("signUpAvatar");
//     signUpAvatar.click();
//   };

//   const inputHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const myForm = new FormData();
//     myForm.append("name", input.name);
//     myForm.append("email", input.email);
//     myForm.append("password", input.password);
//     myForm.append("file", image);
//     console.log("register started...")

//     for (let [key, value] of myForm.entries()) {
//       console.log(key, value);
//     }
//     await dispatch(register(myForm));
//     console.log("register done!!!!!!!!!")
//     // dispatch(loadUser());
//   };

//   const inputImageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setImage(file);
//       setImagePreview(reader.result); //result of reader.readAsDataURL(file)
//     };
//   };

//   return (
//     <>
//       <div className="bg-lightColor min-h-[950px]">
//         <h1 className="text-center text-5xl text-white py-14 font-bold">
//           Welcome to Course Bundler
//         </h1>
//         <div className="grid place-content-center">
//           <form action="" onSubmit={submitHandler}>
//             <div className="p-8 bg-cardColor h-[680px] rounded-xl w-[550px]">
//               <h1 className="font-bold text-white text-center text-3xl pb-10 pt-4">
//                 Signup
//               </h1>
//               <div className="grid place-content-center">
//                 <div
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "50%",
//                   }}
//                   className="bg-dullWhite border-4 border-white overflow-hidden"
//                 >
//                   <img
//                     src={imagePreview}
//                     alt=""
//                     className="h-[100%] w-auto object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="my-4">
//                 <label htmlFor="" className="text-dullWhite block w-[100%]">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
//                   onChange={inputHandler}
//                   name="name"
//                   value={input.name}
//                 />
//               </div>
//               <div className="my-4">
//                 <label htmlFor="" className="text-dullWhite block w-[100%]">
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
//                   onChange={inputHandler}
//                   name="email"
//                   value={input.email}
//                 />
//               </div>
//               <div className="my-4">
//                 <label htmlFor="" className="text-dullWhite block w-[100%]">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
//                   onChange={inputHandler}
//                   name="password"
//                   value={input.password}
//                 />
//               </div>
//               <div className="imageInput my-4">
//                 <button // -- label to button -tag rename
//                   onClick={imageClickInputHandler}
//                   className="cursor-pointer hover:bg-hoverColorBlue bg-blueColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
//                 >
//                   Upload Avatar
//                 </button>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={inputImageHandler}
//                   id="signUpAvatar"
//                   className="Avatar"
//                 />
//               </div>
//               <div className="my-4">
//                 <button
//                   type="submit"
//                   className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none block text-center text-white"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//               <div className=" text-center my-10">
//                 <Link to="/login">
//                   <button className="underline text-white outline-none border-0 hover:text-dullWhite">
//                     Already Sign Up?
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;

// import React, { useState } from 'react';

// const Signup = () => {
//   const [imagePreview, setImagePreview] = useState(''); // Initialize with an empty string
//   const [image, setImage] = useState(null); // Initialize with null
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const inputHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submitHandler = () => {
//     console.log('submit handler called');
//   };

//   const inputImageHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setImagePreview(reader.result); // Set the imagePreview state
//       setImage(file); // Set the image state
//     };
//   };

//   return (
//     <>
//       <div>
//         <h1>Signup here</h1>
//         <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'red' }}>
//           <img src={imagePreview} alt="" />
//         </div>
//         <label htmlFor="name">Name</label>
//         <input type="text" className="bg-slate-300 rounded-md" onChange={inputHandler} name="name" value={input.name} />
//         <label htmlFor="email">Email</label>
//         <input type="text" className="bg-slate-300 rounded-md" onChange={inputHandler} name="email" value={input.email} />
//         <label htmlFor="password">Password</label>
//         <input type="password" className="bg-slate-300 rounded-md" onChange={inputHandler} name="password" value={input.password} />
//         <input type="file" accept="image/*" onChange={inputImageHandler} />
//         <button className="text-green-800">Already signed up?</button>
//         <button className="m-2 bg-slate-400 rounded-lg p-2" onClick={submitHandler}>Signup</button>
//       </div>
//     </>
//   );
// };

// export default Signup;
