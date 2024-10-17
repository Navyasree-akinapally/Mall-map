// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the "Log in" button
  const handleLogin = () => {
    console.log('Logging in...');
    // Add login logic here
    // For example, navigate to the dashboard or another page after login
    navigate('/dashboard'); // Example navigation route
  };

  // Function to handle the "New user? Sign Up" button
  const handleSignUp = () => {
    console.log('Navigating to sign-up page...');
    navigate('/signup'); // Navigate to sign-up page
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen justify-center bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Cross icon at top left */}
      <div className="absolute top-4 left-4">
        <div
          className="text-[#0e141b] flex items-center cursor-pointer"
          onClick={() => console.log('Back or Close')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </div>
      </div>

      <h2 className="text-[#0e141b] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
        Welcome back!
      </h2>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Password"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>

      <p className="text-[#4e7397] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer">
        Forgot password?
      </p>

      {/* Buttons for Log in and Sign up */}
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
          <button
            onClick={handleLogin}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#1980e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em] w-full"
          >
            <span className="truncate">Log in</span>
          </button>

          <button
            onClick={handleSignUp}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#e7edf3] text-[#0e141b] text-base font-bold leading-normal tracking-[0.015em] w-full"
          >
            <span className="truncate">New user? Sign Up</span>
          </button>
        </div>
      </div>

      <div className="h-5 bg-slate-50"></div>
    </div>
  );
};

export default LoginPage;
