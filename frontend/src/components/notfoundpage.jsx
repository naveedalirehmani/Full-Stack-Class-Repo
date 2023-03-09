import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //   navigate('/userProfile')
  //   },2000)
  // },[])
  
  return <h1>not found page</h1>
  // return (<Navigate to="/" />)
}

export default NotFoundPage