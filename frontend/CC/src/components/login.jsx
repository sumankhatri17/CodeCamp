import React from 'react';

const LoginForm = async () => {
  return (<>
    <div className="form-container bg-gray-800 rounded-lg p-8">
      <p className="text-2xl font-bold text-white text-center mb-6">Login</p>
      <form className="space-y-6">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-400">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="bg-gray-700 border border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 rounded-md"
            placeholder="Enter your username"
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
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-500 rounded border border-gray-400 focus:ring-3 focus:ring-blue-300" />
            <label htmlFor="remember" className="ml-2 block text-sm font-medium text-gray-400">
              Remember me
            </label>
          </div>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Sign in
        </button>
      </form>
      <div className="flex items-center justify-center mt-4">
        <div className="h-px w-full bg-gray-700"></div>
        <p className="px-4 text-sm text-gray-400">or</p>
        <div className="h-px w-full bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          <i className="fa-brands fa-facebook-f"></i>
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          <i className="fa-brands fa-twitter"></i>
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          <i className="fa-brands fa-github"></i>
        </button>
      </div>
      <p className="text-sm text-center text-gray-400 mt-4">
        Don't have an account?{' '}
        <a href="#" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
    </>
  );
};

export default LoginForm;