import React from 'react'

export const UserCard = ({user}) => {
  return (
    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center pb-10 mt-8">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.picture} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.fullname}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
    </div>
</div>

  )
}

export default UserCard