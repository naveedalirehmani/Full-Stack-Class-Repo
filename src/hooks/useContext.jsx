import React from 'react'
import WithUseReducer from './components/useContext-useReducer'
import WithUseState from './components/useContext-useState'

const UseContextHook = () => {
  return (
    <div>
      
      <WithUseState></WithUseState>
      
      <WithUseReducer></WithUseReducer>
      
    </div>
  )
}

export default UseContextHook