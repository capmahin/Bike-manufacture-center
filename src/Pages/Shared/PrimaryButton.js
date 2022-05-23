import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn btn-primary uppercase text-black font-bold bg-gradient-to-r from-gray-400 to-blue-500 hover:from-blue-500 hover:to-gray-500">
      {children}
    </button>
  );
};

export default PrimaryButton;
