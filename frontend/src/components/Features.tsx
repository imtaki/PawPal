import { FaBookMedical } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Features: React.FC = () => {
  return (
    <div className="container mx-auto py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-24">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 mb-8">
        </div>
        <h2 className="text-6xl font-bold mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block text-transparent bg-clip-text">
          Elevate Your Pet Care
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Medical Records Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-[2.5rem] transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:rotate-1" />
          <div className="relative p-12 bg-white rounded-[2.5rem] transform transition-all duration-300 group-hover:-translate-y-2">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                <FaBookMedical className="w-14 h-14 text-white" />
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-blue-900 text-center mb-6">Medical Records</h3>
              <p className="text-gray-600 text-center text-xl leading-relaxed">
              Keep all your pet's health records in one place. Track vaccinations, vet visits, and medical history effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Smart Reminders Card */}
        <div className="group relative mt-16 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-[2.5rem] transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:rotate-1" />
          <div className="relative p-12 bg-white rounded-[2.5rem] transform transition-all duration-300 group-hover:-translate-y-2">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                <IoCalendarNumber className="w-14 h-14 text-white" />
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-purple-900 text-center mb-6">Smart Reminders</h3>
              <p className="text-gray-600 text-center text-xl leading-relaxed">
              Never miss important pet care dates. Get timely notifications for vet appointments, medications, and vaccinations.
              </p>
            </div>
          </div>
        </div>

        {/* Pet Profiles Card */}
        <div className="group relative mt-16 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-[2.5rem] transform transition-transform duration-300 group-hover:scale-[1.02] group-hover:rotate-1" />
          <div className="relative p-12 bg-white rounded-[2.5rem] transform transition-all duration-300 group-hover:-translate-y-2">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-6 shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                <CgProfile className="w-14 h-14 text-white" />
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-indigo-900 text-center mb-6">Pet Profiles</h3>
              <p className="text-gray-600 text-center text-xl leading-relaxed">
              Create detailed profiles for each of your pets. Store photos, breed info, and track their unique care requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
