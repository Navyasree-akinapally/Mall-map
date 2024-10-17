// eslint-disable-next-line no-unused-vars
import React from 'react';

const Categories = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{
        '--radio-dot-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(17,20,24)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        fontFamily: '"Work Sans", "Noto Sans", sans-serif',
      }}
    >
      <div className="flex flex-col gap-2 bg-white p-4 pb-2">
        <div className="flex items-center h-12 justify-end">
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#111418] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <div className="text-[#111418]" data-icon="ShoppingCart" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <p className="text-[#111418] tracking-light text-[28px] font-bold leading-tight">All Stores</p>
      </div>
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Category</h3>
      <div className="flex flex-col gap-3 p-4">
        {['Clothing', 'Electronics', 'Accessories', 'Shoes', 'Food & Drink', 'Beauty', 'Toys'].map((category, index) => (
          <label
            key={index}
            className="flex items-center gap-4 rounded-xl border border-solid border-[#dce0e5] p-[15px]"
          >
            <input
              type="radio"
              className="h-5 w-5 border-2 border-[#dce0e5] bg-transparent text-transparent checked:border-[#111418] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111418]"
              name="category"
              defaultChecked={category === 'Clothing'}
            />
            <div className="flex grow flex-col">
              <p className="text-[#111418] text-sm font-medium leading-normal">{category}</p>
            </div>
          </label>
        ))}
      </div>
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Location</h3>
      <div className="flex flex-wrap gap-3 p-4">
        {['Level 1', 'Level 2', 'Level 3'].map((level, index) => (
          <label
            key={index}
            className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#197ce6] relative cursor-pointer"
          >
            {level}
            <input type="radio" className="invisible absolute" name="location" />
          </label>
        ))}
      </div>
      <div className="h-5 bg-white"></div>
    </div>
  );
};

export default Categories;
