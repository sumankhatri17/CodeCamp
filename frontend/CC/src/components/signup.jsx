import React, { useState } from "react";

const SignUpForm = () => {
  const [showImagePlaceholder, setShowImagePlaceholder] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTeacherButtonClick = () => {
    setShowImagePlaceholder(true);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert("File uploaded: " + selectedFile.name);
      // You can add further logic here to upload the file to a server
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="form-container bg-gray-800 rounded-lg p-8 w-full max-w-sm">
        <p className="text-2xl font-bold text-white text-center mb-6">Sign Up</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-md"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-400">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              className="bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-md"
              placeholder="Confirm your password"
            />
          </div>
          <p className="text-lg font-semibold text-white text-center mb-4">Sign Up As</p>
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              className="w-1/2 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Student
            </button>
            <button
              type="button"
              className="w-1/2 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleTeacherButtonClick}
            >
              Teacher
            </button>
          </div>
        </form>
        {showImagePlaceholder && (
          <div className="mt-6 p-4 border border-gray-600 bg-gray-700 rounded-md flex flex-col items-center justify-center relative">
            <p className="text-gray-400 text-sm mb-4">Please upload document for verification</p>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="text-white bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-xs px-3 py-1"
            >
              Choose File
            </button>
            {selectedFile && (
              <div className="mt-2 text-sm text-white-700 flex flex-col items-center">
                <p>Selected File: {selectedFile.name}</p>
                <button
                  onClick={handleUpload}
                  className="text-white bg-gray-500 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-xs px-3 py-1"
                >
                  Upload
                </button>
              </div>
            )}
          </div>
        )}
        <div className="flex items-center justify-center mt-4">
          <div className="h-px w-full bg-gray-700"></div>
          <p className="px-4 text-sm text-gray-400">or</p>
          <div className="h-px w-full bg-gray-700"></div>
        </div>
        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
