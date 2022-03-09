import React, { useContext } from "react";
import FinderContext from "../../context/FinderContext";
import InfoCard from "./InfoCard";
import UserGHBtn from "./UserGHBtn";

const UserBioInfo = () => {
  const { selectedUser } = useContext(FinderContext);
  return (
    <>
      {Object.keys(selectedUser).length && (
        <div className='w-full'>
          <div className='flex mb-6'>
            <h2 className=' text-3xl'>
              {selectedUser.name ? selectedUser.name : selectedUser.login}
            </h2>
            <InfoCard uniqeClass='text-green-500' content={selectedUser.type} />
            {selectedUser.hireable && (
              <InfoCard uniqeClass='text-blue-500' content='Hireable' />
            )}
          </div>
          {selectedUser.bio && <p className='text-base'>{selectedUser.bio}</p>}
          <UserGHBtn />
          {!selectedUser.location &&
          !selectedUser.blog.length &&
          !selectedUser.twitter_username ? (
            <></>
          ) : (
            <div className='flex mt-10 bg-gray-600 shadow-lg py-2 rounded-md '>
              <div className='flex flex-col w-4/12 pl-4 border-r border-gray-500'>
                <span className='text-gray-400'>Location</span>
                <p className='text-lg truncate'>
                  {selectedUser.location ? selectedUser.location : "-"}
                </p>
              </div>
              <div className='flex flex-col w-4/12 border-x border-gray-500 pl-4'>
                <span className='text-gray-400 '>Website</span>
                {!!selectedUser.blog.length ? (
                  <a
                    className='text-lg truncate text-blue-400 hover:text-white'
                    href={
                      selectedUser.blog.includes("https://")
                        ? selectedUser.blog
                        : `https://${selectedUser.blog.length}`
                    }
                    target='_blank'
                    rel='noreferrer'
                  >
                    {selectedUser.blog}
                  </a>
                ) : (
                  <span>-</span>
                )}
              </div>
              <div className='flex flex-col w-4/12 pl-4'>
                <span className='text-gray-400'>Twitter</span>
                {selectedUser.twitter_username ? (
                  <a
                    className='text-lg truncate text-blue-400 hover:text-white'
                    href={`https://twitter.com/${selectedUser.twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {selectedUser.twitter_username}
                  </a>
                ) : (
                  <span>-</span>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserBioInfo;
