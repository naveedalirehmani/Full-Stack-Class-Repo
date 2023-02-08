import React, { createContext, useContext, useReducer } from "react";
import Code from "../../components/code";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};

const CounterContext = createContext(null);

const GrandParent = ({ children }) => {
  const counterReducer = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={counterReducer}>
      {children}
    </CounterContext.Provider>
  );
};

const AddOneContainer = () => {
  return (
    <div>
      <Add></Add>
    </div>
  );
};

const Add = () => {
  const [, dispatch] = useContext(CounterContext);
  return <button onClick={() => dispatch({ type: "ADD" })}>AddOne</button>;
};

const Subtract = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({ type: "SUBTRACT" })}>RemoveOne</button>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>{counter}</div>;
};

export const WithUseReducer = () => {
  return (
    <>
      <GrandParent>
        <AddOneContainer></AddOneContainer>
        <Subtract></Subtract>
        <Counter></Counter>
      </GrandParent>
      <Code
        value={`import React, { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};

const CounterContext = createContext(null);

const GrandParent = ({ children }) => {
  const counterReducer = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={counterReducer}>
      {children}
    </CounterContext.Provider>
  );
};

const AddOneContainer = () => {
  return (
    <div>
      <Add></Add>
    </div>
  );
};

const Add = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({type:"ADD"})}>AddOne</button>
  );
};

const Subtract = () => {
  const [, dispatch] = useContext(CounterContext);
  return (
    <button onClick={() => dispatch({type:"SUBTRACT"})}>
      RemoveOne
    </button>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>{counter}</div>;
};

export const WithUseReducer = () => {
  return (
    <GrandParent>
      <AddOneContainer></AddOneContainer>
      <br />
      <Subtract></Subtract>
      <Counter></Counter>
    </GrandParent>
  );
};

export default WithUseReducer;
`}
      ></Code>
    </>
  );
};

export default WithUseReducer;
