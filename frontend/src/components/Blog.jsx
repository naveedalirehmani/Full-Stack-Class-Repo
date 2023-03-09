import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { NavLink, useParams } from 'react-router-dom'
import { http } from '../http/http'
import { PostQuery } from '../query/quries'
import CardSkeleton from './cardSkeleton'

function ReadBlogs() {
    const [data, setData] = useState()
    const params = useParams()

    useEffect(() => {
        if (params.id && !data) {
            async function fetchData() {
                const res = await http.get(`/post/${params.id}`);
                setData(res.data.post)
            }

            fetchData()
        }
    }, [params , data])

    return (
        <div className='p-3 w-full' >
            <img src='https://images.unsplash.com/photo-1678067573406-7e206fcfe184?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80' alt='blog' />
            <h1>
                {data?.title}
            </h1>
            <p>
                {data?.description}
            </p>
        </div>
    )
}



export default ReadBlogs