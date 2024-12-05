import React from "react";
import UserDashboard from "./UserDashboard";
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const userData = {
  name: "John Doe",
  isInstructor: true,
  routine: {
    location: "Main Campus, Room 305",
    date: "2024-06-15",
    institution: "Tech University",
    section: "Advanced Programming",
  },
  schools: [
    "Tech University",
    "Institute of Modern Education",
    "Global Tech Academy",
  ],
  qualifications: [
    "Ph.D. in Computer Science",
    "M.Sc. in Data Science",
    "B.Sc. in Software Engineering",
  ],
  awards: [
    "Best Educator Award - 2022",
    "Innovative Teaching Award - 2020",
    "Tech Excellence Award - 2019",
  ],
};

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      {/* User Dashboard */}
      <div className="max-w-5xl mx-auto p-4">
        <UserDashboard user={userData} />
      </div>

      {/* Schools Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-6">
        <div className="flex items-center mb-4">
          <BuildingLibraryIcon className="w-6 h-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Associated Schools
          </h2>
        </div>
        <ul className="space-y-2">
          {userData.schools.map((school, index) => (
            <li
              key={index}
              className="flex items-center bg-indigo-50 p-3 rounded shadow-sm"
            >
              <BuildingLibraryIcon className="w-5 h-5 text-indigo-500 mr-2" />
              <span className="text-gray-700">{school}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Qualifications Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-6">
        <div className="flex items-center mb-4">
          <AcademicCapIcon className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Qualifications
          </h2>
        </div>
        <ul className="space-y-2">
          {userData.qualifications.map((qualification, index) => (
            <li
              key={index}
              className="flex items-center bg-green-50 p-3 rounded shadow-sm"
            >
              <AcademicCapIcon className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-700">{qualification}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Awards Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow mt-6">
        <div className="flex items-center mb-4">
          <TrophyIcon className="w-6 h-6 text-yellow-600 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Awards</h2>
        </div>
        <ul className="space-y-2">
          {userData.awards.map((award, index) => (
            <li
              key={index}
              className="flex items-center bg-yellow-50 p-3 rounded shadow-sm"
            >
              <TrophyIcon className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-gray-700">{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
