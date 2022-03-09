import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const Alert = () => {
  return (
    <div className='flex items-center mb-2 ml-4 text-red-700'>
      <FiAlertTriangle />
      <p className='ml-2'>Please enter something</p>
    </div>
  );
};

export default Alert;
