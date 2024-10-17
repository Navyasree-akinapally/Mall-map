// eslint-disable-next-line no-unused-vars
import React from 'react';

const StoreHours = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: "'Work Sans', 'Noto Sans', sans-serif" }}
    >
      <div>
        <div className="flex flex-col gap-2 bg-white p-4 pb-2">
          <div className="flex items-center h-12 justify-between">
            <div
              className="text-[#111418] flex size-12 shrink-0 items-center"
              data-icon="ArrowLeft"
              data-size="24px"
              data-weight="regular"
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
          <p className="text-[#111418] tracking-light text-[28px] font-bold leading-tight">Store Hours</p>
        </div>

        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Today</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {['Nike', 'Apple', 'Uniqlo'].map((store, index) => (
            <div
              key={index}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
            >
              <div className="text-[#111418]" data-icon="CheckCircle" data-size="24px" data-weight="regular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">{store}</h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">8:00 AM - 9:30 PM</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Tomorrow</h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {['Nike', 'Apple', 'Uniqlo'].map((store, index) => (
            <div
              key={index}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
            >
              <div className="text-[#111418]" data-icon="CheckCircle" data-size="24px" data-weight="regular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">{store}</h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">8:00 AM - 9:30 PM</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 border-t border-[#f0f2f5] bg-white px-4 pb-3 pt-2">
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#60758a]"
          href="#"
        >
          <div className="text-[#60758a] flex h-8 items-center justify-center" data-icon="Buildings" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"></path>
            </svg>
          </div>
          <p className="text-[#60758a] text-xs font-medium leading-normal tracking-[0.015em]">Mall</p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#60758a]"
          href="#"
        >
          <div className="text-[#60758a] flex h-8 items-center justify-center" data-icon="MapPin" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.38,38.73,8,8,0,0,0,9.24,0A254.19,254.19,0,0,0,174,204.25c27.49-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16ZM160.33,192a241.73,241.73,0,0,1-32.33,28.49A241.73,241.73,0,0,1,95.67,192C70.17,162.15,56,132.24,56,112a72,72,0,0,1,144,0C200,132.24,185.83,162.15,160.33,192Z"></path>
            </svg>
          </div>
          <p className="text-[#60758a] text-xs font-medium leading-normal tracking-[0.015em]">Map</p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#111418]"
          href="#"
        >
          <div className="text-[#111418] flex h-8 items-center justify-center" data-icon="Storefront" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,128a7.94,7.94,0,0,0-1.75-5L208,86.66V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56V86.66L17.75,123A7.94,7.94,0,0,0,16,128.09V192a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16V168H184v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16ZM64,56H192V83.58L167.1,112H88.9L64,83.58ZM40,128l25.75-30.86,31,34.1A8,8,0,0,0,104,136h48a8,8,0,0,0,5.25-2.77l31-34.1L216,128v48H192V152a16,16,0,0,0-16-16H80a16,16,0,0,0-16,16v24H40ZM72,192H40V168H72Zm144,0H184V168h32v24ZM88,152h80v24H88Z"></path>
            </svg>
          </div>
          <p className="text-[#111418] text-xs font-medium leading-normal tracking-[0.015em]">Stores</p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#60758a]"
          href="#"
        >
          <div className="text-[#60758a] flex h-8 items-center justify-center" data-icon="Tag" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M231.51,122.64l-96-96A15.87,15.87,0,0,0,128,24H48A16,16,0,0,0,32,40v80a15.87,15.87,0,0,0,4.69,11.32l96,96a16.06,16.06,0,0,0,22.62,0l76.2-76.19a16,16,0,0,0,0-22.62ZM128,224,48,144V40h80l96,96Zm-48-96a16,16,0,1,0-16-16A16,16,0,0,0,80,128Z"></path>
            </svg>
          </div>
          <p className="text-[#60758a] text-xs font-medium leading-normal tracking-[0.015em]">Deals</p>
        </a>
      </div>
    </div>
  );
};

export default StoreHours;
