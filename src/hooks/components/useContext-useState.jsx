import React, { createContext, useContext, useState } from "react";
import Code from "../../components/code";

const CounterContext = createContext(null);

const GrandParent = ({ children }) => {
  const counterState = useState(0);

  return (
    <CounterContext.Provider value={counterState}>
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
  const [, setCounter] = useContext(CounterContext);
  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>AddOne</button>
  );
};

const Subtract = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <button onClick={() => setCounter((counter) => counter - 1)}>
      RemoveOne
    </button>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>{counter}</div>;
};

export const WithUseState = () => {
  return (
    <>
      <GrandParent>
        <AddOneContainer></AddOneContainer>
        <Subtract></Subtract>
        <Counter></Counter>
      </GrandParent>
      <Code
        value={`import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

const GrandParent = ({ children }) => {
  const counterState = useState(0);

  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
};

const AddOneContainer = ()=>{
  return (
    <div>
      <Add></Add>
    </div>
  )
}

const Add = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>
      AddOne
    </button>
  );
};

const Subtract = () => {
  const [, setCounter] = useContext(CounterContext);
  return (
    <button onClick={() => setCounter((counter) => counter - 1)}>RemoveOne</button>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext);
  return <div>{counter}</div>;
};

export const WithUseState = () => {
  return (
    <GrandParent>
      <AddOneContainer></AddOneContainer>
      <br />
      <Subtract></Subtract>
      <Counter></Counter>
    </GrandParent>
  );
};

export default WithUseState;
`}
      ></Code>
    </>
  );
};

export default WithUseState;
