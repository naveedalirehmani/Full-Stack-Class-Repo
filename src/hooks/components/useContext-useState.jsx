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
        value={`
import React, { createContext, useContext, useState } from "react";

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

      <p>
        The <code className="code">useContext</code> hook in React allows a
        component to access the context (a way to share state and props) without
        having to manually pass it down through multiple levels of components.
        In the above code example, the{" "}
        <code className="code">CounterContext</code> is created using the{" "}
        <code className="code">createContext</code> function and is then
        provided a value of <code className="code">counterState</code> which is
        a state variable initialized to 0.{" "}
      </p>
      <p>
        The <code className="code">GrandParent</code> component then wraps its
        children components with the{" "}
        <code className="code">CounterContext.Provider</code> component, making
        the <code className="code">counterState</code> available to any of its
        children components that use the{" "}
        <code className="code">useContext</code> hook.{" "}
      </p>
      <p>
        The <code className="code">Add</code>,{" "}
        <code className="code">Subtract</code>, and{" "}
        <code className="code">Counter</code> components all use the{" "}
        <code className="code">useContext</code> hook to access the{" "}
        <code className="code">counterState</code> and update it accordingly.
        The <code className="code">Add</code> and{" "}
        <code className="code">Subtract</code> components both have buttons
        that, when clicked, use the <code className="code">setCounter</code>{" "}
        function to update the <code className="code">counterState</code> by
        either adding or subtracting 1. The{" "}
        <code className="code">Counter</code> component simply displays the
        current value of the <code className="code">counterState</code>.{" "}
      </p>
      <p>
        Benefits of using <code className="code">useContext</code> include:
        <li>Reducing the need for props drilling</li>
        <li>Improving the readability and maintainability of the code</li>
        <li>Allowing for easy sharing of state between multiple components</li>
      </p>
    </>
  );
};

export default WithUseState;
