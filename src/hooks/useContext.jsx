import React, { useReducer, createContext } from "react";
import WithUseReducer from "./components/useContext-useReducer";
import WithUseState from "./components/useContext-useState";
import GrandParent from "./family/grandParent";

export const StoreContext = createContext(null);

const reducer = (state,action)=>{

  switch (action.type) {
    case "add":
      return state+1
    case "subtract":
    return state-1
    default:
      return state
  }

}


const UseContextHook = () => {

  const counter = useReducer(reducer,0)
  

  return (
    <div>
      <WithUseState></WithUseState>
      <WithUseReducer></WithUseReducer>
      useContext
      <hr />
      <StoreContext.Provider value={counter}>
        <GrandParent ></GrandParent>
      </StoreContext.Provider>
    </div>
  );
};

export default UseContextHook;
