import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="form-container bg-gray-800 rounded-lg p-8 w-full max-w-sm">
        <p className="text-2xl font-bold text-white text-center mb-6">Login</p>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="text"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-500 rounded border border-gray-400 focus:ring-3 focus:ring-blue-300"
              />
              <label htmlFor="remember" className="ml-2 block text-sm font-medium text-gray-400">
                Remember me
              </label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <div className="h-px w-full bg-gray-700"></div>
          <p className="px-4 text-sm text-gray-400">or</p>
          <div className="h-px w-full bg-gray-700"></div>
        </div>
        <p className="text-sm text-center text-gray-400 mt-4">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;