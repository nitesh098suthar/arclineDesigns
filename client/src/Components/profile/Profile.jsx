import { Link } from "react-router-dom";
import { loadUser } from "../../redux/actions/userActions";
import { removeFromPlaylistAction } from "../../redux/actions/profileActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/Loader";

const Profile = () => {
  const dispatch = useDispatch();
  const removeFromCart = async (courseId) => {
    // console.log(courseId, "courseId");
    await dispatch(removeFromPlaylistAction(courseId));
    dispatch(loadUser());
  };
  const { loading, user } = useSelector((state) => state.userReducer);
  // console.log(user)
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="bg-lightColor min-h-[750px]">
        <h1 className="text-center text-5xl text-white py-14 font-bold">
          Your Profile & Playlist
        </h1>
        <div className="grid place-content-center">
          <div className="p-8 bg-cardColor h-[500px] rounded-xl w-[550px]">
            <div className="flex justify-center">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid white",
                }}
              >
                <img
                  className="overflow-hidden h-full w-auto  object-cover"
                  alt="profilePic"
                  src={user?.avatar?.url}
                />
              </div>
            </div>
            <div className="text-center">
              <h6 className="text-cyanColor text-3xl font-bold my-6  ">
                {user?.name}
              </h6>
              <div className="my-4 mb-8">
                <h6 className="text-dullWhite ">{user?.email}</h6>
                <h6 className="text-dullWhite ">
                  Created On - {user?.createdAt.split("T")[0]}{" "}
                </h6>
              </div>
              <h6>
                {user?.subscription?.status === "active" ? (
                  <Link to="/cancelsubscription" className=" my-3">
                    <button className="cursor-pointer hover:bg-red-700 bg-redColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-white text-sm">
                      Cancel Subscription
                    </button>
                  </Link>
                ) : (
                  <Link to="/subscribe" className=" my-3">
                    <button className="cursor-pointer hover:bg-green-700 bg-greenColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-white text-sm">
                      Subscribe
                    </button>
                  </Link>
                )}
              </h6>
              <div className="flex ">
                <Link to="/updateprofile" className="w-full my-3 mr-2">
                  <button className="cursor-pointer hover:bg-yellow-600 bg-yellowColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-darkColor text-sm">
                    Update Profile
                  </button>
                </Link>
                <Link to="/changepassword" className="w-full my-3 ml-1">
                  <button className="cursor-pointer hover:bg-yellow-600 bg-yellowColor rounded-sm w-full h-[35px] outline-none p-2 block text-center text-darkColor text-sm">
                    Change Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          {user?.playlist?.length > 0 && (
            <div>
              <h1 className="text-center text-5xl text-white py-14 font-bold">
                Your Playlist
              </h1>
              <div className="flex justify-evenly w-full">
                {user?.playlist?.map((ele, ind) => {
                  return (
                    <div
                      className="bg-cardColor w-[350px] h-[320px] p-6 rounded-lg"
                      key={ind}
                    >
                      <div className="overflow-hidden bg-white rounded-lg w-[100%] h-[180px]">
                        <img
                          src={ele?.poster}
                          alt=""
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                      <p className="capitalize py-1 text-cyanColor font-bold text-xl mt-2">
                        {ele.courseName}
                      </p>
                      <div className="w-[100%] flex mt-2">
                        <Link to={`/course/${ele.id}`}>
                          <button className="text-white text-sm bg-greenColor rounded-sm w-[120px] h-[35px] hover:bg-green-700 mr-3">
                            Watch Now
                          </button>
                        </Link>
                        <button
                          onClick={() => removeFromCart(ele.course)}
                          className="text-white text-sm bg-blueColor rounded-sm w-full h-[35px] border-0 outline-none hover:bg-hoverColorBlue"
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
