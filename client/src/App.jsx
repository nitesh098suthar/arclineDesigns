import React, { useEffect, useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Landing from "./Components/Layout/Landing";
import Footer from "./Components/Layout/Footer";
import ContactUs from "./Components/Layout/ContactUs";
import AboutUs from "./Components/Layout/AboutUs.jsx";
import Policy from "./Components/Layout/Policy.jsx";
import Help from "./Components/Layout/Help.jsx";
import CategoryPage from "./Components/Layout/CategoryPage.jsx";
import Details from "./Components/Layout/Details.jsx";
import LocationCategory from "./Components/Layout/LocationCategory.jsx";
import ProjectUpdater from "./Components/admin/ProjectUpdater.jsx";
import Login from "./Components/auth/Login.jsx";
import Signup from "./Components/auth/Signup.jsx";
import { ProtectedRoute } from "protected-route-react";
import NotFound from "./Components/Not Found/NotFound.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userActions.js";
import { Toaster } from "react-hot-toast";
import { Admin } from "./Components/admin/Admin.jsx";

const App = () => {
  const dispatch = useDispatch();
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.userReducer);

  return (
    <Router>
      <div className={`flex justify-center ${navVisible && "overflow-hidden fixed"}`}>
        <div className="lg:w-screen container">
          <Header navVisible={navVisible} setNavVisible={setNavVisible}/>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/help" element={<Help />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/design/:id" element={<Details />} />
            <Route path="/location/:loc" element={<LocationCategory />} />

            {/* from here admin routes  */}

            <Route
              path="/admin"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/projectupdater/:id"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  redirect="/admin"
                >
                  <ProjectUpdater />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login/8c5c11fc4b9de14be06c050b76c8d56a"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/admin"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup/8c5c11fc4b9de14be06c050b76c8d56b"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/admin"
                >
                  <Signup />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/forgetpassword" element={<ForgetPassword />} /> */}
            {/* <Route path="/resetpassword" element={<ResetPassword />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
