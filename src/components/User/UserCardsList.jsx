import React, { useContext } from "react";
import FinderContext from "../../context/FinderContext";
import UserCard from "../User/UserCard";

const UserCardsList = () => {
  const { users } = useContext(FinderContext);
  return (
    <ul className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-8 gap-y-4 w-100 mx-24'>
      {users && users.map((user) => <UserCard key={user.id} user={user} />)}
    </ul>
  );
};

export default UserCardsList;
