import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import MainHeader from "./components/MainHeader";
import PageNotFound from "./components/PageNotFound";
import data from "./data";
import BecomeaMember from "./pages/BecomeaMember";
import Aboutus from "./components/Aboutus";
import AboutGhosi from "./pages/AboutGhosi";
import Literature from "./pages/Literature";
import VisionMissionObjective from "./pages/VisionMissionObjective";
import Footer from "./components/Footer";
import Matrimonial from "./pages/Matrimonial";
import Gallery from "./pages/Gallery";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import AdminLogin  from "./Auth/AdminLogin"
import AdminDashboard from "./components/AdminDashboard";
import Help from "./pages/Help";

// Create context outside the component to avoid unnecessary re-renders
export const DataContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [cardData, setCardData] = useState(data);
  const [counter, setCounter] = useState(0); // Initialize with 0

  // Show Spinner on route change (optimized)
  useEffect(() => {
    let isMounted = true; // Prevent state update on unmounted component
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) setLoading(false);
    }, 300); // Reduced delay for better UX

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [location]);

  // Fetch visit count from server
  useEffect(() => {
    let isMounted = true;
    axios
      .post("http://localhost:4000/track-visit")
      .then((res) => {
        if (isMounted && res.data?.visit !== undefined) {
          setCounter(res.data.visit); // Assuming response contains { visit: number }
        }
      })
      .catch((err) => console.error("Error fetching visit count:", err));

    return () => {
      isMounted = false;
    };
  }, []); // Run only once on mount

  return (
    <DataContext.Provider value={{ cardData, setCardData, counter }}>
      <div>
        <MainHeader />
        <div>{loading && <Spinner />}</div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/becomeaMemeber" element={<BecomeaMember />} />
          <Route path="/aboutghosi" element={<AboutGhosi />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/vision-mission-objective" element={<VisionMissionObjective />} />
          <Route path="/matrimonial" element={<Matrimonial />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer /> {/* Moved inside Provider to receive `counter` */}
      </div>
    </DataContext.Provider>
  );
};

export default App;
