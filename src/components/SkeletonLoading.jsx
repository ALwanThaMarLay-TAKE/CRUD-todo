import React from "react";

const SkeletonLoading = () => {

  return (
    <div className="animate-pulse">
      <div
        className={`border  justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-400"></div>
          <div className="w-32 h-5 bg-gray-400"></div>
        </div>
        <div className="w-10 h-5 bg-gray-400"></div>
      </div>
      <div
        className={`border  justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-400"></div>
          <div className="w-32 h-5 bg-gray-400"></div>
        </div>
        <div className="w-10 h-5 bg-gray-400"></div>
      </div>{" "}
      <div
        className={`border  justify-between items-center flex p-3 rounded mb-3 last:mb-3`}
      >
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-400"></div>
          <div className="w-32 h-5 bg-gray-400"></div>
        </div>
        <div className="w-10 h-5 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
