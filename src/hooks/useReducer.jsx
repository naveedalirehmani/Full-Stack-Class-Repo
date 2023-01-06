import React, { useReducer } from 'react';
import Code from '../components/code';
import './useReducer.css'

const initialState = {
  todos: [],
  currentTodo: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          text: action.payload,
          completed: false
        }],
        currentTodo: ''
      };
    case 'UPDATE_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) =>index!==action.payload)
      };
    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: []
      };
    default:
      throw new Error();
  }
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: state.currentTodo });
  };

  const handleInputChange = e => {
    dispatch({ type: 'UPDATE_CURRENT_TODO', payload: e.target.value });
  };

  const handleClearTodos = () => {
    dispatch({ type: 'CLEAR_TODOS' });
  };

  const deleteATodo = (index) => {
    dispatch({ type: 'DELETE_TODO',payload:index });
  };

  const toggleTodo = (index)=>{
    dispatch({ type: 'TOGGLE_TODO', payload: index })
  }
  
  return (
        <>
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.currentTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={handleClearTodos}><li>Clear Todos</li></button>
      <ul>
        {state.todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={()=>deleteATodo(index)}>X</button>
            <button onClick={() => toggleTodo(index)}>?</button>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <p>
      Code : 
        </p>  
      <Code value={`import React, { useReducer } from 'react';
import './useReducer.css'

const initialState = {
  todos: [],
  currentTodo: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          text: action.payload,
          completed: false
        }],
        currentTodo: ''
      };
    case 'UPDATE_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) =>index!==action.payload)
      };
    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: []
      };
    default:
      throw new Error();
  }
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: state.currentTodo });
  };

  const handleInputChange = e => {
    dispatch({ type: 'UPDATE_CURRENT_TODO', payload: e.target.value });
  };

  const handleClearTodos = () => {
    dispatch({ type: 'CLEAR_TODOS' });
  };

  const deleteATodo = (index) => {
    dispatch({ type: 'DELETE_TODO',payload:index });
  };

  const toggleTodo = (index)=>{
    dispatch({ type: 'TOGGLE_TODO', payload: index })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.currentTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={handleClearTodos}><li>Clear Todos</li></button>
      <ul>
        {state.todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={()=>deleteATodo(index)}>X</button>
            <button onClick={() => toggleTodo(index)}>?</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerHook;
`}></Code>
    </div>
    </>
  );
}

export default UseReducerHook;
