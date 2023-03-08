import React from 'react'
import { useQuery } from 'react-query'
import { NavLink } from 'react-router-dom'
import { PostQuery } from '../query/quries'
import CardSkeleton from './cardSkeleton'

function ReadBlogs() {
  const { data, isLoading } = useQuery('POSTS', () => PostQuery())

  if (isLoading) {
    return <div className='grid grid-cols-4 gap-5' >
      {[1, 2, 3, 4].map(() => {
        return <CardSkeleton />
      })}
    </div>
  }

  return (
    <div className='p-3 w-full grid grid-cols-4 gap-5' >
      {data?.post?.docs?.length > 0 ? data.post.docs.map((item, index) => {
        return <NavLink to={`${item.id}`} >
          <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg w-full">
            <img className="w-full h-44 object-cover" src={'https://images.unsplash.com/photo-1678067573406-7e206fcfe184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-sm mb-2">{item.title}</div>
              <p className="text-gray-700 text-sm truncate ">
                {item.description}
              </p>
            </div>
          </div>
        </NavLink>
      }) : <div className='text-center w-full' >NO Posts found</div>}
    </div>
  )
}



export default ReadBlogs