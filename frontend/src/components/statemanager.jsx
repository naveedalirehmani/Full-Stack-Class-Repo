import React from "react";
import Code from "./code";

export const StateManager = () => {
  return (
    <div>
      <Code
        value={`import { createContext, useContext, useReducer } from "react"

const initialState = {
    allUsers:[],
    loggedInUser:{}
}

const reducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_USER':
            return {...state,allUsers:[...state.allUsers,action.payload]}
        case 'ADD_LOGGINED_USER':
            return {...state,loggedInUser:action.payload}
        case 'REMOVE_LOGGINED_USER':
            return {...state,loggedInUser:{}}
        default:
            return state
    }
}

const StoreContext = createContext(null);

const Store = ()=>{
    const [state,dispatch]  = useReducer(reducer,initialState)
    return {state,dispatch}
}


const StoreProvider =({children})=>{
    return <StoreContext.Provider value={Store()}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext).state
export const useDispatch = () => useContext(StoreContext).dispatch

export default StoreProvider;
`}
      ></Code>
      <h1>Explanation of Code</h1>
      <p>
        The code creates a custom state manager that utilizes the React hooks{" "}
        <code className="code">createContext</code>,{" "}
        <code className="code">useContext</code>, and{" "}
        <code className="code">useReducer</code>. The following application was built using this state managment library, The state manager is composed
        of several components:
      </p>
      <ul>
        <li>
          <code className="code">initialState</code>: An object that represents
          the initial state of the application. In this case, it has two
          properties: <code className="code">allUsers</code> and{" "}
          <code className="code">loggedInUser</code>.
        </li>
        <li>
          <code className="code">reducer</code>: A function that takes the
          current state and an action as arguments, and returns the next state
          based on the action type. The function has a switch statement that
          handles different actions, such as adding a user to{" "}
          <code className="code">allUsers</code> or adding the logged-in user to{" "}
          <code className="code">loggedInUser</code>.
        </li>
        <li>
          <code className="code">StoreContext</code>: A context object created
          using <code className="code">createContext</code>.
        </li>
        <li>
          <code className="code">Store</code>: A hook that utilizes{" "}
          <code className="code">useReducer</code> to manage the state. It takes
          the <code className="code">reducer</code> and{" "}
          <code className="code">initialState</code> as arguments and returns an
          object with the current state and the dispatch function.
        </li>
        <li>
          <code className="code">StoreProvider</code>: A component that wraps
          its children and provides the <code className="code">Store</code>{" "}
          object to them using the{" "}
          <code className="code">StoreContext.Provider</code>.
        </li>
        <li>
          <code className="code">useStore</code> and{" "}
          <code className="code">useDispatch</code> : These are custom hooks
          that provide easy access to the state and dispatch function
          respectively by using <code className="code">useContext</code> to
          consume the <code className="code">StoreContext</code>.
        </li>
      </ul>
      <h1>Why we might require a state manager</h1>
      <p>
        A state manager is a way to centralize the management of the
        application's state and provide a way for different components to access
        and update the state. This can make it easier to:
      </p>
      <ul>
        <li>Track the changes in the state over time.</li>
        <li>Update the state in a predictable way.</li>
        <li>Share the state between different components.</li>
        <li>
          Avoid prop drilling, where the same props have to be passed down
          multiple levels of components.
        </li>
      </ul>
      <h1>Other state management libraries</h1>
      <p>
        There are several other state management libraries that can be used in a
        React application, such as:
      </p>
      <ul>
        <li>
          Redux: A popular state management library that is based on the
          principles of functional programming.
        </li>
        <li>
          MobX: A library that uses observables and reactions to simplify the
          management of the state.
        </li>
        <li>
          Unstated: A library that provides a way to manage the state using
          hooks and context, similar to the custom state manager shown in the
          code.
        </li>
        <li>
          Apollo Client: A library that is specifically designed for managing
          the state of a GraphQL API.
        </li>
      </ul>

      <Code
        value={`
      import React, { useEffect, useState } from 'react';
      import { useDispatch, useStore } from '../store';
      
      function LogInPage (props){
          
          
          const allUsers = useStore().allUsers
          const dispatch = useDispatch()
      
          const [userData,setUserData] = useState({
              email:'',
              password:""
          })
      
              
        const saveLoginInfo = (e) =>{
          let newUser = userData;
          newUser = {...newUser,[e.target.name]:e.target.value}
          setUserData(newUser)
        }
        
          const loginHandler = ()=>{
            
              const user = allUsers.find(item => {
                  return item.email === userData.email && item.password === userData.password
              })
      
              if(user){
                  dispatch({type:'ADD_LOGGINED_USER',payload:user})
                  Navigate('/userprofile')
              }else{
                  alert("no such user")
              }
              
          }  
      
          return <div></div>
      }
      
      
      export default LogInPage;`}
      ></Code>

      <h1>useStore and useDispatch</h1>
      <p>
        useStore and useDispatch are custom hooks that you can use to access the
        state and dispatch function of your store. They are exported from the
        custom store file and can be used in any component that is wrapped by
        the StoreProvider component.
      </p>
      <h2>useStore</h2>
      <ul>
        <li>useStore is a hook that returns the current state of the store.</li>
        <li>
          It's used to access the state of the store and to get the value of a
          specific state property. For example, you can use it to get the value
          of the `allUsers` property of the store state.
        </li>
        <li>
          For example:
          <pre class="code">const allUsers = useStore().allUsers</pre>
        </li>
      </ul>
      <h2>useDispatch</h2>
      <ul>
        <li>
          useDispatch is a hook that returns the dispatch function of the store.
        </li>
        <li>
          It's used to update the state of the store by dispatching an action.
          For example, you can use it to add a user to the `allUsers` property
          of the store state.
        </li>
        <li>
          For example:
          <pre class="code">
            const dispatch = useDispatch()
            <br />
            {`dispatch({type:'ADD_LOGGINED_USER',payload:user})`}
          </pre>
        </li>
      </ul>
      <p>
        In the above code, useStore returns the state object and useDispatch
        returns the dispatch function of the store. The dispatch function takes
        an action object as an argument and it's used to update the state of the
        store by calling the reducer function.
      </p>
    </div>
  );
};

export default StateManager;
