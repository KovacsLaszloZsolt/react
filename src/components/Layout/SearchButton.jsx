import React, { useContext } from "react";
import FinderContext from "../../context/FinderContext";

const Button = () => {
  const { fetchUsers } =
    useContext(FinderContext);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    fetchUsers();
  };

  return (
    <button
      type='submit'
      className='bg-stone-800 hover:bg-stone-900 text-white h-12 px-10 rounded-r-lg font-semibold border-y-2 border-r-2 border-gray-500 border-solid'
      onClick={handleButtonClick}
    >
      GO
    </button>
  );
};

export default Button;
