import React, { useState } from "react";

const page = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    // event.preventDefault();

    // Implement login logic here (e.g., call an API to authenticate)
    // For example:
    // fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // })
    // .then(response => {
    //   if (response.ok) {
    //     // Login successful (redirect to protected area)
    //   } else {
    //     setErrorMessage('Invalid email or password');
    //   }
    // })
    // .catch(error => {
    //   console.error('Login error:', error);
    //   setErrorMessage('An error occurred. Please try again later.');
    // });

    // setEmail("");
    // setPassword("");
  };

  return (
    <div className="h-screen bg-white flex mt-40">
      <div className="w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-black text-4xl font-bold leading-9 md:text-6xl">
          Welcome Back
        </h1>
        {/* <form onSubmit={handleSubmit} className="mt-10"> */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {/* <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            /> */}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input 
              type="password" 
              id="password"
              name="password"
              autoComplete="current-password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            {/* <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            /> */}
          </div>
          {/* {errorMessage && (
            <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
          )} */}
          <button
            type="submit"
            className="mx-auto mt-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-black bg-[#BA932F] hover:bg-[#a5822a]"
          >
            Login
          </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default page;
