import React, { useState } from 'react';

const ReviewSection = () => {
  const [reviewText, setReviewText] = useState(''); // State for review input
  const [reviews, setReviews] = useState([]); // State to hold reviews
  const [rating, setRating] = useState(0); // State for rating

  const handleReviewSubmit = () => {
    if (reviewText.trim() && rating > 0) {
      setReviews([...reviews, { text: reviewText, rating }]); // Add review to state
      setReviewText(''); // Clear the review text
      setRating(0); // Reset rating
      alert('Thank you for your review!'); // Confirmation alert
    } else {
      alert('Please enter a review and select a rating.'); // Error alert
    }
  };


  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="flex items-center bg-slate-50 p-4 justify-between border-b border-gray-300">
        <div className="flex size-12 shrink-0 items-center cursor-pointer" onClick={() => window.history.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold text-center">Reviews</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex items-center justify-center h-12 bg-transparent text-[#0e141b] gap-2 text-base font-bold">
            <div className="text-[#0e141b]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-x-8 gap-y-6 p-4">
        <div className="flex flex-col gap-2 items-start">
          <p className="text-[#0e141b] text-5xl font-bold leading-tight tracking-[-0.015em]">4.6</p>
          <div className="flex gap-1">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-[#1980e6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                  ></path>
                </svg>
              </div>
            ))}
            <div className="text-[#1980e6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="text-[#0e141b] text-base font-normal leading-normal">90 reviews</p>
        </div>

        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
          {[5, 4, 3, 2, 1].map((star, index) => (
            <React.Fragment key={index}>
              <p className="text-[#0e141b] text-sm font-normal leading-normal">{star}</p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#d0dbe7]">
                <div className="rounded-full bg-[#1980e6]" style={{ width: `${(star === 1 ? 70 : 5) || 10}%` }}></div>
              </div>
              <p className="text-[#4e7397] text-sm font-normal leading-normal text-right">{(star === 1 ? 70 : 5) || 10}%</p>
            </React.Fragment>
          ))}
        </div>
      </div>

      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 py-4">Add your review</h3>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your experience"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none min-h-36 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-5 justify-center">
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-[#1980e6] text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            onClick={handleReviewSubmit}
          >
            <div className="flex justify-center items-center">Submit</div>
          </button>
        </div>
      </div>
      
      {/* Display submitted reviews */}
      <div className="flex flex-col px-4 py-5">
        <h4 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">User Reviews:</h4>
        <ul className="list-disc pl-6">
          {reviews.map((review, index) => (
            <li key={index} className="text-[#0e141b] text-base">{`${review.rating} stars: ${review.text}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewSection;
