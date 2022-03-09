import React, { useContext } from "react";
import SearchButton from "../Layout/SearchButton";
import ClearButton from "../Layout/ClearButton";
import FinderContext from "../../context/FinderContext";
import Alert from "./Alert";

const Search = () => {
  const {
    searchValue,
    setSearchValue,
    isSearched,
    setIsSearched,
    searchedUsers,
  } = useContext(FinderContext);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      className={`flex flex-col mx-24 self-center sm:self-start mb-10 ${
        searchedUsers !== null ? "mt-10 " : ""
      }
      `}
    >
      {isSearched && searchValue === "" && <Alert />}
      <form action='' className='flex '>
        <input
          className='h-12 rounded-l-lg sm:w-80 border-y-2 border-l-2 border-gray-500 border-solid'
          type='search'
          name='search-input'
          id='search-input'
          placeholder='Search'
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={() => {
            setIsSearched(false);
          }}
        />
        <SearchButton />
        {searchedUsers && <ClearButton />}
      </form>
    </div>
  );
};

export default Search;
