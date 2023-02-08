import React from 'react'
import { useStore } from '../store'
import UserCard from './userCards'

export const UserProfile = () => {
  const user = useStore().loggedInUser
  return (
    <div>UserProfile

    <UserCard user={user}></UserCard>
      
    </div>
  )
}

export default UserProfile