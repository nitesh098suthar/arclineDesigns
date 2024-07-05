import { useState } from "react";
import { useDispatch } from "react-redux";
import { createDesignAction } from "../../redux/actions/designActions";

const ProjectAdder = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    designTitle: "",
    location: "",
    heightInFeet: "",
    widthInFeet: "",
    noOfBathRooms: "",
    noOfBedRooms: "",
    architectName: "",
    profession: "",
    popular: "false",
    category: "",
    designDes: "",
  });

  const [architectImage, setArchitectImage] = useState("");
  const [houseImage, setHouseImage] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [houseImagePreview, setHouseImagePreview] = useState("");
  const [allImagesPreview, setAllImagesPreview] = useState([]);
  const [architectImagePreview, setArchitectImagePreview] = useState("");

  const categories = [
    "Residential",
    "Commercial Hospitality",
    "Exterior",
    "Interior",
    "Temples",
    "Other",
  ];

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input)
  };

  const handleImage = (e, setImage, setPreview) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
      setImage(file);
    };
  };

  const handleMultipleImages = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setAllImages(files);
    setAllImagesPreview(previews);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("project is adding .....")
    const myForm = new FormData();
    Object.keys(input).forEach((key) => myForm.append(key, input[key]));
    myForm.append("houseImage", houseImage);
    myForm.append("architectImage", architectImage);
    myForm.append("allImages", allImages)
    allImages.forEach((image, index) =>
      myForm.append(`allImages[${index}]`, image)
  );
  console.log("myForm", myForm)
  console.log("allImages", allImages)
  console.log("project got details.. .....")
  try {
    await dispatch(createDesignAction(myForm));
  } catch (error) {
    console.log(error)
  }
  console.log("project got added successfully.. .....")
  };

  // const { loading } = useSelector((state) => state.globalReducer);

  return false ? (
    // <Loader />
    <></>
  ) : (
    <>
      <div className="bg-[#1D232A] h-full pb-20">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Create New Design
        </h1>
        <div className="mb-10">{/* <SideBar /> */}</div>
        <div className="grid place-content-center">
          <form
            onSubmit={submitHandler}
            className="p-8 bg-cardColor rounded-xl w-[700px] space-y-6"
          >
            <div className="flex justify-between space-x-4">
              {[
                { label: "Design Title", name: "designTitle" },
                { label: "Location", name: "location" },
              ].map((field, index) => (
                <div className="flex-1" key={index}>
                  <label className="text-dullWhite block w-[100%]">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={input[field.name]}
                    onChange={inputHandler}
                    className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between space-x-4">
              {[
                {
                  label: "Height (in feet)",
                  name: "heightInFeet",
                  type: "number",
                },
                {
                  label: "Width (in feet)",
                  name: "widthInFeet",
                  type: "number",
                },
              ].map((field, index) => (
                <div className="flex-1" key={index}>
                  <label className="text-dullWhite block w-[100%]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={input[field.name]}
                    onChange={inputHandler}
                    className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between space-x-4">
              {[
                {
                  label: "Number of Bathrooms",
                  name: "noOfBathRooms",
                  type: "number",
                },
                {
                  label: "Number of Bedrooms",
                  name: "noOfBedRooms",
                  type: "number",
                },
              ].map((field, index) => (
                <div className="flex-1" key={index}>
                  <label className="text-dullWhite block w-[100%]">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={input[field.name]}
                    onChange={inputHandler}
                    className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between space-x-4">
              {[
                { label: "Architect Name", name: "architectName" },
                { label: "Profession", name: "profession" },
              ].map((field, index) => (
                <div className="flex-1" key={index}>
                  <label className="text-dullWhite block w-[100%]">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={input[field.name]}
                    onChange={inputHandler}
                    className="bg-slate-300 rounded-sm w-full h-[35px] outline-none p-2"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between space-x-4">
              <div className="flex-1">
                <label className="text-dullWhite block w-[100%]">
                  Category
                </label>
                <select
                  name="category"
                  value={input.category}
                  onChange={inputHandler}
                  className="w-full h-[35px] bg-slate-300 px-1 text-black border-none rounded-sm"
                >
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-dullWhite block w-[100%]">Popular</label>
                <select
                  name="popular"
                  value={input.popular}
                  onChange={inputHandler}
                  className="w-full h-[35px] bg-slate-300 px-1 text-black border-none rounded-sm"
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
            </div>

            <div className="my-4">
              <label className="text-dullWhite block w-[100%]">
                Design Description
              </label>
              <textarea
                name="designDes"
                value={input.designDes}
                onChange={inputHandler}
                className="bg-slate-300 rounded-sm w-full h-[100px] outline-none p-2"
                rows="4"
              ></textarea>
            </div>

            <div className="flex justify-between space-x-4">
              {[
                {
                  label: "House Image",
                  handler: (e) =>
                    handleImage(e, setHouseImage, setHouseImagePreview),
                  preview: houseImagePreview,
                },
                {
                  label: "Architect Image",
                  handler: (e) =>
                    handleImage(e, setArchitectImage, setArchitectImagePreview),
                  preview: architectImagePreview,
                },
              ].map((field, index) => (
                <div className="flex-1" key={index}>
                  <label className="text-dullWhite block w-[100%] mb-2">
                    {field.label}
                  </label>
                  <div className="relative mb-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={field.handler}
                      className="hidden"
                      id={`fileInput-${index}`}
                    />
                    <label
                      htmlFor={`fileInput-${index}`}
                      className="bg-primary text-white px-4 py-2 rounded-sm cursor-pointer w-full text-center block"
                    >
                      Select File
                    </label>
                    {field.preview && (
                      <div className="w-full h-32 bg-slate-100 rounded-md overflow-hidden my-4">
                        <img
                          src={field.preview}
                          alt={field.label}
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="my-4">
              <label className="text-dullWhite block w-[100%] mb-2">
                Additional Images
              </label>
              <div className="relative mb-4">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleMultipleImages}
                  className="hidden"
                  id="additionalImagesInput"
                />
                <label
                  htmlFor="additionalImagesInput"
                  className="bg-primary text-white px-4 py-2 rounded-sm cursor-pointer w-full text-center block"
                >
                  Select Files
                </label>
              </div>
              <div className="flex flex-wrap gap-2 my-4">
                {allImagesPreview.map((src, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 bg-slate-100 rounded-md overflow-hidden"
                  >
                    <img
                      src={src}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="text-white bg-primary rounded-sm w-full h-[35px] border-0 outline-none hover:bg-green-700"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectAdder;
