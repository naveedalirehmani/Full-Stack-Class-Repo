import React from 'react'
import UserCard from './userCards'

export const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'))

  return (
    <div>UserProfile

    <UserCard user={user}></UserCard>
      
    </div>
  )
}

export default UserProfile