import { useState, useEffect } from "react";
import SingleSelectChip from "../childMatch/SingleSelectChip";
import AgeSelect from "../childMatch/Age_select";
import ToAgeSelect from "../childMatch/ToAgeSelect";
import MotherTongue from "../childMatch/Mother_tongue";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Matrimonial_Match = () => {
  // Store selected filter values
  const [gender, setGender] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false); // Track if search is clicked

  // Fetch users from JSON server
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => setAllUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle Search
  const handleSearch = () => {
    const results = allUsers.filter((user) => {
      return (
        (!gender || user.gender.toLowerCase() === gender.toLowerCase()) &&
        (!ageFrom || user.age >= ageFrom) &&
        (!ageTo || user.age <= ageTo) &&
        (!motherTongue || user.motherTongue.toLowerCase() === motherTongue.toLowerCase())
      );
    });
    setFilteredUsers(results);
    setIsSearchClicked(true); // Set search clicked to true
  };
const navigate = useNavigate();
const clickHandler=()=>{
  navigate("/registerform")
  
}
const loginclickHandler=()=>{
  navigate("/login")
  
}

  return (
<div className="max-w-full mx-auto p-8 bg-white rounded-lg shadow-lg mt-4">
 <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
  <h6 className="text-xl font-bold text-center text-[rgb(9,8,5)] bg-[#45eb36] px-4 py-2 rounded-lg">
    Find Your Perfect Match in the Ghosi Community
  </h6>
  <div className="flex flex-row sm:flex-row gap-2">
    <button 
      onClick={clickHandler}
      className="px-6 py-2 bg-[#256c1c] text-white rounded-lg shadow-md hover:bg-[#65864f] transition duration-300"
    >
      Register
    </button>
    <button 
      onClick={loginclickHandler}
      className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
    >
      Login
    </button>
  </div>
</div>

      
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8">
        {/* Gender Selection */}
        <div className="w-full md:flex-1">
          <SingleSelectChip onSelect={setGender} />
        </div>

        {/* Age Selection */}
        <div className="w-full flex items-center space-x-2 md:flex-1">
          <AgeSelect onSelect={setAgeFrom} />
          <span className="text-gray-700 font-semibold hidden md:block">To</span>
          <ToAgeSelect onSelect={setAgeTo} />
        </div>

        {/* Mother Tongue */}
        <div className="w-full md:flex-1">
          <MotherTongue onSelect={setMotherTongue} />
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-4 flex justify-center">
        <button
          className="w-full md:w-auto bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-400 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Display Filtered Users */}
      <div className="mt-6">
        {isSearchClicked ? ( // Only show filtered results if search is clicked
          filteredUsers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="p-4 bg-gray-100 rounded-lg shadow flex item-center justify-around">

                <div className="mt-2">
                    <img
                    src={user.image}
                    alt={user.name}
                    className="w-full h-30 object-cover rounded-lg"
                    />
                </div>

                <div>
                <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
                  <p className="text-gray-700">Age: {user.age}</p>
                  <p className="text-gray-700">Gender: {user.gender}</p>
                  <p className="text-gray-700">Mother Tongue: {user.motherTongue}</p>

                  <div>
                    <button 
                    onClick={clickHandler}
                    className="text-yellow-600 font-semibold">View full Profile</button>
                  </div>
                </div>                      
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">No matches found</p>
          )
        ) : (
          <p className="text-center text-gray-500 mt-4">Click &quot;Search&quot; to see results</p>
        )}
      </div>
    </div>
  )
};

export default Matrimonial_Match;

