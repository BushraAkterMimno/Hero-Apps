import React from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
      <HashLoader color="#632EE3" size={100} />
      <p className="mt-4 text-blue-700 font-medium">Loading...</p>
    </div>
  );
};

export default Spinner;
