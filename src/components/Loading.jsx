import React from "react";

const Loading = () => {
  return (
    <div className="grid gap-7 justify-items-center">
      <div className="border-white border-s-2 border-t-2 w-24 h-24 rounded-full animate-spin"></div>
      <p className="text-4xl animate-pulse">LOADING</p>
    </div>
  );
};

export default Loading;
