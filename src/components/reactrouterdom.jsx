import React from 'react'
import {useLocation} from 'react-router-dom';
import Code from './code.jsx'

export const ReactRouterDom = () => {

  const location = useLocation()
  
  return (
    <div style={{ width: '80vw' }}>
      <p>
        react-router-dom is a popular library for routing in React applications. It provides several components that you can use to build your routes. Here are some of the basic routers and their uses:
      </p>
      <p>
        BrowserRouter: A router that uses the HTML5 history API to keep your UI in sync with the URL. It should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI).
        
      </p>
      <Code value={`
      import { BrowserRouter } from 'react-router-dom';
      const App = () => {
  return (
    <BrowserRouter>
      {/* Your routes go here */}
    </BrowserRouter>
  );
};`} />
      <p>
        HashRouter: A router that uses the hash part of the URL (e.g. window.location.hash) to keep your UI in sync with the URL. It should be used when you don't have a server that will handle dynamic requests.
        
      </p>
      <Code value={`import { HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      {/* Your routes go here */}
    </HashRouter>
  );
};`} />

      <p>

        Link: A component that is used to navigate to different routes in your app. It renders as an a element and should be used instead of a regular a element to avoid a full page refresh.
        
      </p>
      <Code value={`import { Link } from 'react-router-dom';

const App = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
};`} />
      <p>

        Route: A component that is used to render a specific component when the route's path matches the current URL. It has the following props:
        path: a string or regex that matches the current URL
        element: the React element to render for the route
        
      </p>
      <Code value={`
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </div>
  );
`}></Code>
      <p>
        There are also other routers and components available in react-router-dom, such as Switch, Redirect, and withRouter, which you can use to build more complex routing configurations. You can find more information about these and other routers and components in the react-router-dom documentation.
      </p>
      <br />
      <p>
        here * is used to match all incoming urls, by doing this we can nest/group routes together.

        ? you can nest multiple route in side a single route like this.

        <Code value={` 
        <Route path='/*'>
      <Route path='/one' element={<One></One>}></Route>
      <Route></Route>
      <Route></Route>
    </Route>
    `} />

        * there are two reason why we would do this. one to nest routes so that we can group related routes together and break our routes into multiple components, 2. so that we can add a prefix route and a common layout to a group of routes, here in this file we have nested routes for the first reason and in the route/index file we nest routes for the second reason.</p>

      <br />

      <p>  here nested is a prefix path and Layout is used as a common layout for all other nested components
        index will render on https:localhost:3000/nested.

      </p>

      <Code value={` 
    <Routes>
        <Route path='/nested' element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='useeffect' element={<UseEffectHook></UseEffectHook>}></Route>
            <Route path='usestate' element={<UseStateHook></UseStateHook>}></Route>
            <Route path='usereducer' element={<UseReducerHook></UseReducerHook>}></Route>
            <Route path='rickandmorty' element={<RickAndMorty></RickAndMorty>}></Route>
            <Route path='reactrouterdom' element={<ReactRouterDom></ReactRouterDom>}></Route>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}>  </Route>
        </Route>
        </Routes>
        `} />

      <p> all of this is also posible with useRoutes hoook that is provided by react-router-dom;
        const element = useRoutes(routes);</p>

      <Code value={`
      import { Routes,Route,useRoutes } from 'react-router-dom'
      
      const routes = [
          {
            path: '/nested',
            element: <Layout />,
            children: [
              {
                index:true,  
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
          return (element)
      }
      export default MultipleRoutes
     `}
      ></Code>

      <p>
        here I have used Link component, it take multiple props
        <li>
          1. replace: this will remove the routing history
        </li>
        <li>
          2. to="/" : takes to this path
        </li>
        <li>
          3. reloadDocument: this will reload entire page on click by default react-router only conditionaly renders content.
        </li>
      </p>

      <Code value={`<Link to="/nested/reactrouterdom" replace reloadDocument>React Router Dom</Link>`}></Code>

      <p>
        Navlink is alternative to Link this has extra properties such as
        isActive  : will tell you if it is active or not
        end : this will match exact route, other wise if parent route is match such as nested routes it will give isActive true. not currently working...
      </p>

      <Code value={`<NavLink style={(isActive)=>{
      return isActive ? {color:'black'} : {}
    }} to="/nested/reactrouterdom">React Router Dom </NavLink>`}></Code>
  <p>
    use can use Navigate or useNavigate to navigate a user back to a different page if he reaches a route that does not exists or you want to send him to home page on login.
    also passing -1 to navigate(-1) will push us back to previous route
  </p>

  <Code value={`import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()
  
  useEffect(()=>{
    setTimeout(()=>{
    navigate('/')
    },2000)
  },[])
  
  return <h1>not found page</h1>
  // return (<Navigate to="/" />)
}

export default NotFoundPage`}></Code>


<p>
useLocation is a hook from the react-router-dom library that allows you to access the current location object for the current route. The location object contains information about the current URL, including the pathname, search string, and hash.
Here's an example of how you can use the useLocation hook:

with Link and Navlink tags we can also add state on click such. <Code value={`<NavLink state='2'></NavLink>`}></Code>
we can get this state variable with useLocation
</p>
<Code value={`
import { useLocation } from 'react-router-dom'

const Example = () => {
  const location = useLocation()
  console.log(location.pathname) // logs the current pathname
  console.log(location.search) // logs the current search string
  console.log(location.hash) // logs the current hash
}
`}></Code>
<p>

useSearchParams is a hook from the react-router-dom library that allows you to access and manipulate the search string of the current URL. The search string is the part of the URL that comes after the ? character, and it can contain key-value pairs in the form of key=value.
Here's an example of how you can use the useSearchParams hook:

used to get the search params such as "page" in https://localhost:3000/character/?page=2 

</p>

<Code value={`
  
import { useSearchParams } from 'react-router-dom'

const Example = () => {
  const searchParams = useSearchParams()
  console.log(searchParams.get('key')) // logs the value of the "key" parameter in the search string
  searchParams.set('key', 'newValue') // updates the "key" parameter in the search string
  searchParams.delete('key') // removes the "key" parameter from the search string
  searchParams.append('newKey', 'newValue') // adds a new "newKey" parameter to the search string
}
  `}></Code>
  <p>

useParams is a hook from the react-router-dom library that allows you to access the dynamic parameters of the current route. Dynamic parameters are parts of the route's pathname that are prefixed with a : character, and they can be used to represent a variable value in the route.
Here's an example of how you can use the useParams hook:

used to get the url params example: params/:id you can get this id with useParams
  </p>

<Code value={`
import { useParams } from 'react-router-dom'

const Example = () => {
  const params = useParams()
  console.log(params.id) // logs the value of the "id" parameter in the current route
}`}></Code>
<p>
In this example, the component will log the value of the "id" parameter in the current route. For example, if the current route is /users/123, the component will log 123.
</p>
    </div>

  )
}

export default ReactRouterDom