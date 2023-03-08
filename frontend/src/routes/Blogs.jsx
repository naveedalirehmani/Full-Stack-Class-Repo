import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadBlogs from '../components/Blogs'
import Layout from '../components/layout'

function Blogs() {
    return (
        <Routes>
            <Route index element={<ReadBlogs />}></Route>
            <Route path='create' element={<ReadBlogs />}></Route>
            <Route path=':id' element={<>
                Blog details here
            </>}></Route>
        </Routes>
    )
}

export default Blogs