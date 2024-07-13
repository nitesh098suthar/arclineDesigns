import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  clearMessage,
  rej,
  req,
  res,
} from "../../redux/reducers/globalReducer";
import toast from "react-hot-toast";

function ProjectUpdater() {
  const { id } = useParams();

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
    category: "Residential",
    designDes: "",
  });

  const [architectImage, setArchitectImage] = useState(null);
  const [houseImage, setHouseImage] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [existingDesign, setExistingDesign] = useState(null);
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(
    (state) => state.globalReducer
  );
  const nav = useNavigate();
  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/api/v1/design/${id}`
        );
        setExistingDesign(response.data.oneDesign);
        setInput({
          designTitle: response.data.oneDesign.designTitle,
          location: response.data.oneDesign.location,
          heightInFeet: response.data.oneDesign.heightInFeet,
          widthInFeet: response.data.oneDesign.widthInFeet,
          noOfBathRooms: response.data.oneDesign.noOfBathRooms,
          noOfBedRooms: response.data.oneDesign.noOfBedRooms,
          architectName: response.data.oneDesign.architectName,
          profession: response.data.oneDesign.profession,
          popular: response.data.oneDesign.popular.toString(),
          category: response.data.oneDesign.category,
          designDes: response.data.oneDesign.designDes,
        });
      } catch (error) {
        console.error("Error fetching design data", error);
      }
    };

    fetchDesign();
  }, [id]);

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const numberInputHandler = (e) => {
    const value = e.target.value.replace(/\D/, "");
    setInput({ ...input, [e.target.name]: value });
  };

  const handleHouseImageChange = (e) => {
    setHouseImage(e.target.files[0]);
  };

  const handleArchitectImageChange = (e) => {
    setArchitectImage(e.target.files[0]);
  };

  const handleAllImagesChange = (e) => {
    setAllImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("designTitle", input.designTitle);
    formData.append("location", input.location);
    formData.append("heightInFeet", input.heightInFeet);
    formData.append("widthInFeet", input.widthInFeet);
    formData.append("noOfBathRooms", input.noOfBathRooms);
    formData.append("noOfBedRooms", input.noOfBedRooms);
    formData.append("architectName", input.architectName);
    formData.append("profession", input.profession);
    formData.append("popular", input.popular);
    formData.append("category", input.category);
    formData.append("designDes", input.designDes);

    if (architectImage) {
      formData.append("architectImage", architectImage);
    }

    if (houseImage) {
      formData.append("houseImage", houseImage);
    }

    for (const image of allImages) {
      formData.append("allImages", image);
    }

    try {
      dispatch(req());
      const response = await axios.put(
        `http://localhost:9000/api/v1/design/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      dispatch(res(response.data));
      toast.success("Project updated successfully.");
      dispatch(clearMessage());
      nav("/admin");
    } catch (error) {
      dispatch(rej(response.data.error.message));
      toast.error(error);
      dispatch(clearError());
      console.error(error);
    }
  };

  if (!existingDesign) {
    return <Loader />;
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="App p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
          <h1 className="text-2xl font-bold text-center">Update Project</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Design Title"
                onChange={inputHandler}
                value={input.designTitle}
                name="designTitle"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Location"
                onChange={inputHandler}
                value={input.location}
                name="location"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Height in Feet"
                onChange={numberInputHandler}
                value={input.heightInFeet}
                name="heightInFeet"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Width in Feet"
                onChange={numberInputHandler}
                value={input.widthInFeet}
                name="widthInFeet"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Number of Bathrooms"
                onChange={numberInputHandler}
                value={input.noOfBathRooms}
                name="noOfBathRooms"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Number of Bedrooms"
                onChange={numberInputHandler}
                value={input.noOfBedRooms}
                name="noOfBedRooms"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Architect Name"
                onChange={inputHandler}
                value={input.architectName}
                name="architectName"
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Profession"
                onChange={inputHandler}
                value={input.profession}
                name="profession"
              />
              <select
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                onChange={inputHandler}
                value={input.popular}
                name="popular"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
              <select
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                onChange={inputHandler}
                value={input.category}
                name="category"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial Hospitality">
                  Commercial Hospitality
                </option>
                <option value="Exterior">Exterior</option>
                <option value="Interior">Interior</option>
                <option value="Temples">Temples</option>
                <option value="Others">Others</option>
              </select>
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="text"
                placeholder="Design Description"
                onChange={inputHandler}
                value={input.designDes}
                name="designDes"
              />
            </div>
            <div className="space-y-2">
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="file"
                onChange={handleHouseImageChange}
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="file"
                onChange={handleArchitectImageChange}
              />
              <input
                className="w-full border-[1px] border-gray-300 p-2 rounded"
                type="file"
                multiple
                onChange={handleAllImagesChange}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ProjectUpdater;
