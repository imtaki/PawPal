import { FaBookMedical } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Features: React.FC = () => {
  return (
    <div className="container mx-auto py-20 px-6 mt-8 bg-gradient-to-b from-white to-blue-50">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
          Features You'll Love
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
          <div className="relative p-8 bg-white rounded-2xl transform transition-transform group-hover:-translate-y-1">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 transform transition-transform group-hover:scale-110">
                <FaBookMedical className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-blue-800 text-center mb-4">Track Medical Records</h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Keep track of vet visits, vaccinations, and health records with our intuitive digital system.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
          <div className="relative p-8 bg-white rounded-2xl transform transition-transform group-hover:-translate-y-1">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 transform transition-transform group-hover:scale-110">
                <IoCalendarNumber className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-purple-800 text-center mb-4">Set Reminders</h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Never forget vet appointments or vaccination schedules with our smart reminder system.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl transform transition-transform group-hover:scale-[1.02] group-hover:rotate-1"></div>
          <div className="relative p-8 bg-white rounded-2xl transform transition-transform group-hover:-translate-y-1">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl p-4 transform transition-transform group-hover:scale-110">
                <CgProfile className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-indigo-800 text-center mb-4">Manage Pet Profiles</h3>
              <p className="text-gray-600 text-center text-lg leading-relaxed">
                Organize details for all your pets in one convenient place with customizable profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;