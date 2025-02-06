import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import MainHeader from "./components/MainHeader";
import PageNotFound from "./components/PageNotFound";
import data from "./data";
import BecomeaMember from "./pages/BecomeaMember";
import Aboutus from "./components/Aboutus";
import Aboutghosi from "./pages/Aboutghosi";
import Literature from "./pages/Literature";
import VisionMissionObjective from "./pages/VisionMissionObjective";
import Footer from "./components/Footer";

// Create context OUTSIDE the component to avoid unnecessary re-renders
export const DataContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [cardData, setCardData] = useState(data);

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

  return (
    <div>
      <MainHeader />
      
      <div>
        {loading && <Spinner />}

        <DataContext.Provider value={{ cardData, setCardData }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/become-a-member" element={<BecomeaMember />} />
            <Route path="/aboutghosi" element={<Aboutghosi />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/vision-mission-objective" element={<VisionMissionObjective />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DataContext.Provider>
      </div>

      <Footer />
    </div>
  );
};

export default App;
