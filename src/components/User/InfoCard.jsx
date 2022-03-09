import React from "react";

const InfoCard = ({ uniqeClass, content, icon }) => {
  return (
    <span
      className={`flex items-center bg-gray-700 text-xs rounded-xl shadow-sm shadow-gray-800 py-0.5 px-2 ml-2 ${uniqeClass}`}
    >
      {icon}
      {content}
      
    </span>
  );
};

export default InfoCard;
