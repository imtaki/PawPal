import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaPaw, FaEnvelope, FaCalendar } from "react-icons/fa";
import axios from "axios";
import moment from "moment";
const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    createdAt: "",
    formattedDate: "",
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3001/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!localStorage.getItem("token")) {
    navigate("/login");
    return null;
  }
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 lg:px-8">
      <div className="text-center bg-white p-8 border border-gray-300 rounded-lg shadow-xl w-full sm:w-[500px] hover:border-blue-600 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Profile Details</h1>
        
        <div className="flex justify-center mb-8">
          <FaUserCircle size={120} className="text-blue-500" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <FaPaw className="text-blue-500" />
            <span className="font-semibold">Username:</span> {userData.username || "Pet Lover"}
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-blue-500" />
            <span className="font-semibold">Email:</span> {userData.email}
          </div>

          <div className="flex items-center justify-center gap-3">
            <FaCalendar className="text-blue-500" />
            <span className="font-semibold">Member Since:</span> {moment(userData.formattedDate).format("MMMM DD, YYYY")}
          </div>
        </div>

        <button 
          onClick={() => navigate('/pets')}
          className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
        >
          View My Pets
        </button>
      </div>
    </div>
  );
};


export default Profile;
