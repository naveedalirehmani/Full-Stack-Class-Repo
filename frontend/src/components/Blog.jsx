import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { PostQuery } from '../query/quries'


function ReadBlogs() {
    const params = useParams()
    const { data } = useQuery(['POST', params.id], () => PostQuery(params.id))
    return (
        <div className='p-3 w-full' >
            <img src='https://images.unsplash.com/photo-1678067573406-7e206fcfe184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' alt='blog' />
            <h1>
                {data?.post.title}
            </h1>
            <p>
                {data?.post.description}
            </p>
        </div>
    )
}



export default ReadBlogs