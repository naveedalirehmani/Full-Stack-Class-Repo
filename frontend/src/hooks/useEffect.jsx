import React, { useEffect, useState } from "react";
import Code from '../components/code.jsx'

export const UseEffectHook = () => {
  //? Basics
  //introduction to useEffect.
  //callback and the dependency array.
  //When will useEffect be called?
  //? useEffect dependency mistakes.
  //avoiding rerenders with dependency array / primitives and non-premitives
  //using useMemo to avoid rerenders
  //avoid putting any non-premitives in dependency arrays
  //? the cleanUp function.
  // renders useEffect on first render then render cleanUp function before useEffect every time component render
  //clean up functions to clean up fetch calls
  const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    let cancleCall = false;
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal
    })
      .then((response) => response.json())
      .then((data) => {
        if (!cancleCall) {
          console.log(data)
          setData(data);
          controller.abort()
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // console.log("fetch aborted");
        }
      });
    return () => {
      cancleCall = true;
      controller.abort()
    };
  }, []);
  //? catching errors with strict mode.
  // you might have notice that with strict mode enabled, react components renders twice! this is to ensure that we don't run into errors on second mount as some errors only occure on the second mount.
  // example
  //   const [number,setNumber] = useState(1)
  //   useEffect(()=>{
  //     console.log('in setInterval effect');
  //     const interval =  setInterval(()=>{
  //         setNumber(prev=> prev+1)
  //     },[1000])
  //     return ()=>{
  //         console.log('clean up')
  //     }
  //   },[])

  // const [state,changeState] = useState(false)

  // const [counter,setCounter] = useState(0)

  // useEffect(()=>{
  //   // useEffect...
  //   console.log('%c componentWillMount', 'color: white; background: seagreen; padding: 15px; font-size: 18px; font-weight: bold;');
  //   return ()=>{
  //     console.log('%c componentWillunMount', 'color: white; background: #c40808; padding: 15px; font-size: 18px; font-weight: bold;');
  //     // cleanup Function...
  //   }
  // } , [state] )


  return (
    <div>
      <h1 className="text-lg font-bold"> Basics </h1>
      <p>introduction to useEffect.</p>
      <p>callback and the dependency array.</p>
      <p>When will useEffect be called?</p>

      <h1 className="text-lg font-bold"> useEffect dependency mistakes. </h1>
      <p>avoiding rerenders with dependency array / primitives and non-premitives</p>
      <p>using useMemo to avoid rerenders</p>
      <p>avoid putting any non-premitives in dependency arrays</p>
      <Code language="javascript" value={`   useEffect(()=>{
      useEffect...
     console.log('%c componentWillMount', 
     'color: white; background: seagreen; padding: 15px; font-size: 18px; font-weight: bold;');
     return ()=>{
       console.log('%c componentWillunMount',
         'color: white; background: #c40808; padding: 15px; font-size: 18px; font-weight: bold;');
        cleanup Function...
     }
   } , [state] )`} />

      <h1 className="text-lg font-bold"> the cleanUp function. </h1>
      <p> renders useEffect on first render then render cleanUp function before useEffect every time component </p>render
      <p>clean up functions to clean up fetch calls</p>
      <h1 className="text-lg font-bold"> catching errors with strict mode. </h1>
      <p> you might have notice that with strict mode enabled, react components renders twice! this is to ensure that we don't run into errors on second mount as some errors only occure on the second mount.</p>
      <h1 className="text-lg font-bold"> example code </h1>
      <Code language="javascript" value={`const [data, setData] = useState([]);
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    let cancleCall = false;
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal
    })
      .then((response) => response.json())
      .then((data) => {
        if (!cancleCall) {
          console.log(data)
          setData(data);
          controller.abort()
        }
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // console.log("fetch aborted");
        }
      });
    return () => {
      cancleCall = true;
      controller.abort()
    };
  }, [] );`} />

      <h1 className="text-lg font-bold">example 2</h1>
      <Code language="javascript" value={`     const [number,setNumber] = useState(1)
     useEffect(()=>{
       console.log('in setInterval effect');
       const interval =  setInterval(()=>{
           setNumber(prev=> prev+1)
       },[1000])
       return ()=>{
           console.log('clean up')
       }
     },[])

   const [state,changeState] = useState(false)

   const [counter,setCounter] = useState(0)`} />





      {/* <p>{state ? "true" : "false"}</p>
      <button onClick={()=>changeState(false)}>state</button>
      
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>counter</button> */}

      {/* <h1 className="text-lg font-bold">{number}</h1> */}
      {data.length ? (
        <ul>
          {data.map((element) => {
            return <li key={element.name}>{element.username}</li>;
          })}
        </ul>
      ) : (
        <p>no users found</p>
      )}
    </div>
  );
};

export default UseEffectHook;