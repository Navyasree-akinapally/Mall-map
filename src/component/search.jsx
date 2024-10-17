// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const [stores] = useState(['Nike', 'Apple', 'Sephora', "Victoria's Secret", 'H&M', 'Zara', 'Uniqlo']); // Store list

  // Filter stores based on search query
  const filteredStores = stores.filter((store) => 
    store.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  // Navigate to store details page
  const handleStoreClick = (store) => {
    console.log(`Navigating to ${store} store details...`);
    // Example navigation to a store details page
    navigate(`/store/${store.toLowerCase()}`);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <div className="text-[#111418] flex size-12 shrink-0 items-center cursor-pointer" data-icon="ArrowLeft" data-size="24px" data-weight="regular" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Search</h2>
      </div>

      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-xl border-r-0" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-r-none pr-2 pl-2 text-base font-normal leading-normal"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Nike, Apple, Sephora..."
            />
            <div className="flex items-center justify-center rounded-r-xl border-none bg-[#f0f2f5] pr-4">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-transparent text-[#111418] gap-2 text-base font-bold leading-normal tracking-[0.015em] h-auto min-w-0 px-0"
                onClick={handleClearSearch}
              >
                <div className="text-[#60758a]" data-icon="XCircle" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </label>
      </div>

      {/* List of filtered search items */}
      {filteredStores.map((store, index) => (
        <div key={index} className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer" onClick={() => handleStoreClick(store)}>
          <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">{store}</p>
          <div className="shrink-0">
            <div className="text-[#111418] flex size-7 items-center justify-center" data-icon="ArrowRight" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
      <div className="h-5 bg-white"></div>
    </div>
  );
};

export default SearchPage;
