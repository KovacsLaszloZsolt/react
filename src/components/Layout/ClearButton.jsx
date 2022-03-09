import React, { useContext } from "react";
import FinderContext from "../../context/FinderContext";

const ClearButton = () => {
  const { setSearchValue, setSearchedUsers, setIsSearched } =
    useContext(FinderContext);
  const handleClickClearBtn = () => {
    setSearchValue("");
    setSearchedUsers(null);
    setIsSearched(false);
  };
  return (
    <button
      type='button'
      className='hover:bg-neutral-600 ml-4 text-slate-200 h-12 px-6 rounded-lg font-medium text-sm'
      onClick={handleClickClearBtn}
    >
      CLEAR
    </button>
  );
};

export default ClearButton;
