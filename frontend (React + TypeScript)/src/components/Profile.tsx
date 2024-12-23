import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 lg:px-8 font-lusitana">
    <div className="text-center bg-white p-6 border border-gray-300 rounded-lg shadow-xl w-full sm:w-[400px] hover:border-blue-600 hover:scale-110 transition-all ease-in-out duration-300">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <div className="flex justify-center">
        <FaUserCircle size={100} className="text-black" />
      </div>
      <div className="mt-4 gap-2 flex flex-row">
        <strong>Email:</strong> {user.email}
      </div>
    </div>
  </div>
  );
};

export default Profile;
