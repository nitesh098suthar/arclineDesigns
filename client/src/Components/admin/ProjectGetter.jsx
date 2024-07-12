import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOndeDesignAction,
  getAllDesignsAction,
} from "../../redux/actions/designActions";
import { useNavigate } from "react-router-dom";
import Loader from "../Layout/Loader";

const ProjectGetter = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Fetch designs when the component mounts
  useEffect(() => {
    dispatch(getAllDesignsAction());
  }, [dispatch]);

  const { allListings } = useSelector((state) => state.designReducer);
  const { loading } = useSelector((state) => state.globalReducer);

  const updateDesign = (id) => {
    nav(`projectupdater/${id}`);
  };

  const deleteDesign = async (id) => {
    console.log("here is delete id ", id);
    await dispatch(deleteOndeDesignAction(id));
    await dispatch(getAllDesignsAction());
    console.log("design delete successfully");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#1D232A] min-h-screen pb-16">
          <h1 className="text-center text-5xl text-white py-14 font-bold">
            All Designs
          </h1>
          <div className="mb-10">{/* <SideBar /> */}</div>
          <div className="grid place-content-center ">
            <table>
              <thead>
                <tr className="text-cyanColor font-light pb-4">
                  <td className="p-2 text-center px-6">ID</td>
                  <td className="p-2 text-center px-6">Design Title</td>
                  <td className="p-2 text-center px-6">Location</td>
                  <td className="p-2 text-center px-6">Height (ft)</td>
                  <td className="p-2 text-center px-6">Width (ft)</td>
                  <td className="p-2 text-center px-6">Bathrooms</td>
                  <td className="p-2 text-center px-6">Bedrooms</td>
                  <td className="p-2 text-center px-6">Area (sq ft)</td>
                  <td className="p-2 text-center px-6">Architect</td>
                  <td className="p-2 text-center px-6">Popular</td>
                  <td className="p-2 text-center px-6">Category</td>
                  <td className="p-2 text-center px-6">Update</td>
                  <td className="p-2 text-center px-6">Delete</td>
                </tr>
              </thead>
              <tbody>
                {allListings &&
                  allListings.map((design, i) => (
                    <tr key={i}>
                      <td className="p-2 text-center px-6 text-white">
                        {design ? i + 1 : null}
                      </td>
                      <td className="p-2 text-center px-6 text-white capitalize">
                        {design.designTitle}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.location}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.heightInFeet}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.widthInFeet}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.noOfBathRooms}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.noOfBedRooms}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.areaInSquareFeet}
                      </td>
                      <td className="p-2 text-center px-6 text-white capitalize">
                        {design.architectName}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        {design.popular ? "Yes" : "No"}
                      </td>
                      <td className="p-2 text-center px-6 text-white capitalize">
                        {design.category}
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        <button
                          onClick={() => updateDesign(design._id)}
                          className="p-1 bg-greenColor text-white text-sm px-4 rounded-sm hover:bg-green-700"
                        >
                          Update
                        </button>
                      </td>
                      <td className="p-2 text-center px-6 text-white">
                        <button
                          onClick={() => deleteDesign(design._id)}
                          className="p-1 bg-redColor text-white text-sm px-4 rounded-sm hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGetter;
