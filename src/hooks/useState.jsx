import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Code from "../components/code.jsx";
import RenderTodoList from "./components/todo.jsx";

export const  UseStateHook = () => {
  const obj = useOutletContext()

  const [inputValue, setInputValue] = useState("");

  const [allTodos, setAllTodos] = useState([
    {id:0,value:'props passing test',completed:false}
  ]);

  const changeInputValue = (inputValue) => {
    setInputValue(inputValue);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setAllTodos((preValue)=>{
      return [...preValue, { id:allTodos.length, value: inputValue, completed: false }]
    });
    setInputValue('')
  };

  const deleteTodo = (index) => {
    const allNewTodos = allTodos.filter((_, i) => i !== index);
    setAllTodos(allNewTodos);
  };

  const setComplete = (index) => {
    const allNewTodos = allTodos.map((element, i) => {
      if (i === index) {
        element.completed = !element.completed;
        return element;
      }
      return element;
    });
    setAllTodos(allNewTodos);
  };

  return (
    <>
    <div className="UseStateHook">

    useStateHook 
    <div>
    {obj.hello} : this was render with react-router-dom outlet context
    </div>
        
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={(e) => changeInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">set todo</button>
      </form>

      <div>
        <RenderTodoList propsAllTodos={allTodos} propsSetComplete={(index)=>setComplete(index)}propsDeleteTodo={(index)=>deleteTodo(index)}></RenderTodoList>
      </div>
        
    </div>
    <div>
      <p>Code : </p>  
      <Code value={`
        import React, { useState } from "react";
        import { useOutletContext } from "react-router-dom";
        import RenderTodoList from "./components/todo.jsx";
        
        export const  UseStateHook = () => {
          const obj = useOutletContext()
        
          const [inputValue, setInputValue] = useState("");
        
          const [allTodos, setAllTodos] = useState([
            {id:0,value:'props passing test',completed:false}
          ]);
        
          const changeInputValue = (inputValue) => {
            setInputValue(inputValue);
          };
        
          const addTodo = (e) => {
            e.preventDefault();
            setAllTodos((preValue)=>{
              return [...preValue, { id:allTodos.length, value: inputValue, completed: false }]
            });
            setInputValue('')
          };
        
          const deleteTodo = (index) => {
            const allNewTodos = allTodos.filter((_, i) => i !== index);
            setAllTodos(allNewTodos);
          };
        
          const setComplete = (index) => {
            const allNewTodos = allTodos.map((element, i) => {
              if (i === index) {
                element.completed = !element.completed;
                return element;
              }
              return element;
            });
            setAllTodos(allNewTodos);
          };
        
          return (
            <div className="UseStateHook">
        
            useStateHook 
            <div>
            {obj.hello} : this was render with react-router-dom outlet context
            </div>
                
              <form onSubmit={addTodo}>
                <input
                  type="text"
                  onChange={(e) => changeInputValue(e.target.value)}
                  value={inputValue}
                />
                <button type="submit">set todo</button>
              </form>
        
              <div>
                <RenderTodoList propsAllTodos={allTodos} 
                propsSetComplete={(index)=>setComplete(index)}
                propsDeleteTodo={(index)=>deleteTodo(index)}>
                </RenderTodoList>
              </div>
                
            </div>
          );
        }
        
        export default UseStateHook;
      `}></Code>
    </div>
    </>
  );
}

export default UseStateHook;