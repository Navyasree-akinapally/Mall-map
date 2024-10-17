// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const CreateAccount = () => {
  // State for input fields and password visibility
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Handle form submission
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log("Account created:", { email, password });
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div
      className="relative flex flex-col min-h-screen justify-center items-center bg-slate-50"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="absolute top-4 left-4">
        <div
          className="text-[#0e141b] flex items-center cursor-pointer"
          onClick={() => console.log("Close form")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
          </svg>
        </div>
      </div>

      <h1 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center pb-3">
        Create account
      </h1>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Password</p>
          <div className="flex w-full flex-1 items-stretch rounded-xl">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
            />
            <div
              className="text-[#4e7397] flex border border-[#d0dbe7] bg-slate-50 items-center justify-center pr-[15px] rounded-r-xl border-l-0 cursor-pointer"
              data-icon="Eye"
              data-size="24px"
              data-weight="regular"
              onClick={togglePasswordVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>

      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 justify-center">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Confirm password</p>
          <div className="flex w-full flex-1 items-stretch rounded-xl">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
            />
            <div
              className="text-[#4e7397] flex border border-[#d0dbe7] bg-slate-50 items-center justify-center pr-[15px] rounded-r-xl border-l-0 cursor-pointer"
              data-icon="Eye"
              data-size="24px"
              data-weight="regular"
              onClick={togglePasswordVisibility}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="rounded-xl bg-[#0e141b] hover:bg-[#1a202c] text-slate-50 py-2 px-4 mt-4"
      >
        Create account
      </button>
    </div>
  );
};

export default CreateAccount;
