import React, { useContext } from "react";
import UserCardsList from "../User/UserCardsList";
import Search from "../Layout/Search";
import FinderContext from "../../context/FinderContext";
import { Oval } from "react-loader-spinner";

const Home = () => {
  const { isLoading, searchValue } = useContext(FinderContext);
  return (
    <main className='flex flex-col'>
      <Search />
      {isLoading && searchValue !== "" ? (
        <div className='self-center mt-10'>
          <Oval color='#00BFFF' height={80} width={80} />
        </div>
      ) : (
        <UserCardsList />
      )}
    </main>
  );
};

export default Home;
