// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MallPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleWebsiteClick = () => {
    window.open('https://www.westfield.com/valleyfair', '_blank'); // Open mall website
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:4082484451'; // Dial the phone number
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <div className="text-[#111418] flex size-12 shrink-0 items-center cursor-pointer" onClick={handleBackClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-grow text-center">
          Malls
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6 bg-white px-4 min-h-[72px] py-2">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1 text-center">
            Westfield Valley Fair
          </p>
          <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2 text-center">
            2855 Stevens Creek Blvd, Santa Clara, CA 95050
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer" onClick={handleWebsiteClick}>
        <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">Website</p>
        <div className="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Social Links */}
      {['Facebook', 'Instagram', 'Twitter'].map((social, index) => (
        <div key={index} className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer">
          <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">{social}</p>
          <div className="shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"
              ></path>
            </svg>
          </div>
        </div>
      ))}

      {/* Phone Details */}
      <div className="flex gap-4 bg-white px-4 py-3 justify-between cursor-pointer" onClick={handlePhoneClick}>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[#111418] text-base font-medium leading-normal">Phone</p>
          <p className="text-[#60758a] text-sm font-normal leading-normal">408 248 4451</p>
        </div>
        <div className="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M222.37,158.46l-47.11-20.18a20,20,0,0,0-19.13,2.09l-19.17,14.38A118.87,118.87,0,0,1,101.27,125l11.26-23.56a20,20,0,0,0-4.36-22.1L68.36,47.64a20,20,0,0,0-23.62-2.41L22.86,54.83A19.94,19.94,0,0,0,14,70.62c8.92,48.56,31.53,91.32,64.1,123.88s75.32,55.18,123.88,64.1a19.94,19.94,0,0,0,15.79-8.84l9.6-13.88a20,20,0,0,0-2.41-23.62Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Hours */}
      <div className="flex items-center gap-4 bg-white px-4 py-3 justify-between cursor-pointer">
        <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">Hours</p>
        <div className="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MallPage;
