import React from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'
import { UseStateHook, UseEffectHook, UseReducerHook } from '../hooks'
import { RickAndMorty } from '../components/rickAndMorty.jsx'
import Layout from '../components/layout.jsx'
import Home from '../components/userProfile.jsx'
import NotFoundPage from '../components/notfoundpage.jsx'
import ReactRouterDom from '../components/reactrouterdom.jsx'
import Hooks from '../hooks/hooks'
import UseContextHook from '../hooks/useContext'
import StateManager from '../components/statemanager'
import ReadBlogs from '../components/Blogs'
import Blog from '../components/Blog'
import Create from '../components/Create'


const routes = [
  {
    path: '/nested',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'useeffect',
        element: <UseEffectHook />
      },
      {
        path: 'usestate',
        element: <UseStateHook />
      },
      {
        path: 'usereducer',
        element: <UseReducerHook />
      },
      {
        path: 'rickandmorty',
        element: <RickAndMorty />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
];


const MultipleRoutes = () => {

  // here nested is a prefix path and Layout is used as a common layout for all other nested components
  // index will render on https://localhost:3000/nested.


  // all of this is also posible with useRoutes hook that is provided by react-router-dom;
  // const element = useRoutes(routes);

  return (
    <Routes>
      <Route path='/nested' element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='useeffect' element={<UseEffectHook></UseEffectHook>}></Route>
        <Route path='usestate' element={<UseStateHook></UseStateHook>}></Route>
        <Route path='usereducer' element={<UseReducerHook></UseReducerHook>}></Route>
        <Route path='rickandmorty' element={<RickAndMorty></RickAndMorty>}></Route>
        <Route path='blogs' >
          <Route index element={<ReadBlogs />}></Route>
          <Route path='create' element={<Create />}></Route>
          <Route path=':id' element={<Blog />} ></Route>
        </Route>
        <Route path='reactrouterdom' element={<ReactRouterDom></ReactRouterDom>}></Route>
        <Route path='customhooks' element={<Hooks></Hooks>}></Route>
        <Route path='useContext-useState' element={<UseContextHook></UseContextHook>}></Route>
        <Route path='statemanager' element={<StateManager></StateManager>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Route>
    </Routes>
    // elementg
  )
}

export default MultipleRoutes


