import  { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
// import axios from "axios";
import Spinner from "./components/Spinner";
import MainHeader from "./components/MainHeader";
import data from "./data";
import Footer from "./components/Footer";
import AppRouter from "./Routes/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
// import GoogleTranslate from "./components/GoogleTranslate";

export const DataContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [cardData, setCardData] = useState(data);
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const timer = setTimeout(() => {
      if (isMounted) setLoading(false);
    }, 300);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [location]);

  // useEffect(() => {
    // let isMounted = true;
    // axios
    //   .post("http://localhost:4000/api/v1/track-visit")
    //   .then((res) => {
    //     if (isMounted && res.data?.visit !== undefined) {
    //       setCounter(res.data.visit);
    //     }
    //   })
    //   .catch((err) => console.error("Error fetching visit count:", err));

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <DataContext.Provider value={{ cardData, setCardData}}>
      <AuthProvider>


        <MainHeader />

        {loading ? (
          <Spinner />
        ) : (
          <>
            {/* <GoogleTranslate /> */}
            <AppRouter />
          </>
        )}

         <Footer />
      </AuthProvider>
    </DataContext.Provider>
  );
};

export default App;
