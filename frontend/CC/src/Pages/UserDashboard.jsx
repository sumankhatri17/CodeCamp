import React from "react";
import { UserCircle, Calendar, MapPin, Building2, Users } from "lucide-react";

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`border rounded-lg shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const UserDashboard = ({ user }) => {
  return (
    <div className="p-4 max-w-5xl mx-auto bg-white rounded-lg shadow-sm flex flex-row items-start space-x-6">
      {/* Profile Panel */}
      <div className="flex-shrink-0 flex flex-col items-center space-y-2">
        <UserCircle size={64} className="text-blue-500" />
        <div className="text-center">
          <CardTitle>{user.name}</CardTitle>
          <p className="text-sm text-gray-500">
            {user.isInstructor ? "Instructor" : "Student"}
          </p>
        </div>
      </div>

      {/* Routine and Details Panel */}
      <div className="flex-grow grid grid-cols-2 gap-4">
        {/* Routine Details */}
        <div>
          <CardTitle className="mb-2">Upcoming Routine</CardTitle>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-500" />
              <span>{user.routine.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-green-500" />
              <span>{user.routine.date}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Building2 className="text-purple-500" />
              <span>{user.routine.institution}</span>
            </div>
            <div className="flex items-center space-x-3">
              <UserCircle className="text-red-500" />
              <span>{user.routine.section}</span>
            </div>
          </div>
        </div>

        {/* Group to Teach */}
        <div>
          <CardTitle className="mb-2">Group to Teach</CardTitle>
          <div className="flex items-center space-x-3">
            <Users className="text-orange-500" />
            <span>Advanced Programming Students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
