import React, { useState } from "react";
import axios from "axios";

function App() {
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

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
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
      const response = await axios.post(
        "http://localhost:9000/api/v1/design",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Error uploading images");
    }
  };

  return (
    <div className="App p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Image Upload</h1>
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
  );
}

export default App;
