// import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Aboutus from "../components/Aboutus";
import BecomeaMember from "../pages/BecomeaMember";
import AboutGhosi from "../pages/AboutGhosi";
import Literature from "../pages/Literature";
import VisionMissionObjective from "../pages/VisionMissionObjective";
import Matrimonial from "../pages/Matrimonial_Match";
// import Gallery from "../pages/Gallery";
import Register from "../signup/Register";
import Registerform from "../signup/Registerform";
import Login from "../Auth/Login";
import AdminLogin from "../Auth/AdminLogin";
import AdminDashboard from "../components/AdminDashboard";
import Help from "../pages/Help";
import PageNotFound from "../components/PageNotFound";
// import Education from "../pages/Education";
// import Career from "../pages/Career";
// import Scholarship from "../pages/Scholarship";

import AdminRoute from '../components/ProtectedRoute';
import OtpPage from "../pages/OtpPage";
import NewsEvents from "../pages/NewsEvents";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/becomeaMember" element={<BecomeaMember />} />
      <Route path="/aboutghosi" element={<AboutGhosi />} />
      <Route path="/literature" element={<Literature />} />
      <Route path="/vision-mission-objective" element={<VisionMissionObjective />} />
      <Route path="/matrimonial" element={<Matrimonial />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/registerform" element={<Registerform />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/news" element={<NewsEvents />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      
      {/* Protected admin route */}
      <Route element={<AdminRoute />}>
        <Route path="/adminlogin/dashboard" element={<AdminDashboard />} />
      </Route>

      <Route path="/help" element={<Help />} />
      {/* <Route path="/careers/education" element={<Education />} />
      <Route path="/careers/career" element={<Career />} />
      <Route path="/careers/scholarship" element={<Scholarship />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
