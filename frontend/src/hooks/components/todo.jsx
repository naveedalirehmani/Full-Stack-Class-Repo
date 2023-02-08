import React from "react";

const RenderTodoList = (props) => {

  console.log("props",props)
  
  
  return (
    <ul>
      {props.propsAllTodos.map((element, index) => {
        return (
          <li
            key={element.id}
            style={{ textDecoration: element.completed ? "line-through" : "" }}
          >
            {element.value}
            <button onClick={() => props.propsDeleteTodo(index)}>X</button>
            <button onClick={() => props.propsSetComplete(index)}>✔️</button>
          </li>
        );
      })}
    </ul>
  );
};

export default RenderTodoList;