import React from "react";

const ShimmerUI = ({x}) => {
  const shimmerCards = Array(x).fill(""); // Adjust number of shimmer cards

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {shimmerCards.map((_, index) => (
        <div
          key={index}
          className="w-full bg-white p-4 rounded-lg shadow-md border border-gray-200 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>

          {/* Title Placeholder */}
          <div className="h-5 bg-gray-300 rounded-md mb-3 w-3/4"></div>

          {/* Description Placeholder */}
          <div className="h-4 bg-gray-300 rounded-md mb-2 w-full"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-2 w-5/6"></div>

          {/* Button Placeholder */}
          <div className="h-8 bg-gray-300 rounded-md w-1/2 mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
